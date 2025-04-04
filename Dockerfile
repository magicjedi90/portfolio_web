# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies required for node-gyp
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies with clean npm cache
RUN npm cache clean --force && \
    npm install

# Copy the rest of the application
COPY . .

# Build the application with a placeholder API URL
# This will be overridden by runtime environment variables
ENV NEXT_PUBLIC_API_URL=http://localhost:8080
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Set environment to production
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Copy necessary files from builder
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Expose the port the app runs on
EXPOSE 3000

# Use port 3000 for local development
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Start the application
CMD ["node", "server.js"] 
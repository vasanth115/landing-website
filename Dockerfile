# Step 1: Build Stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies (optimize Docker layer caching)
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install


# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Step 2: Production Image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy necessary files from the build stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose the port Next.js runs on
EXPOSE 5000

# Start the Next.js app
CMD ["npm", "start"]

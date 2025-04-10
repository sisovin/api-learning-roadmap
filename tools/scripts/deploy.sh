# filepath: d:\GithubWorkspace\api-learning-roadmap\tools\scripts\deploy.sh
#!/bin/bash

# Deploy options based on environment
ENVIRONMENT=${1:-development}

echo "Deploying to $ENVIRONMENT environment..."

case $ENVIRONMENT in
  development)
    echo "Running local development deployment..."
    npm run build
    # Add local deployment commands
    ;;
  staging)
    echo "Deploying to staging environment..."
    npm run build
    # Add staging deployment commands
    ;;
  production)
    echo "Deploying to production environment..."
    npm run build
    # Add production deployment commands (Vercel, etc.)
    ;;
  *)
    echo "Unknown environment: $ENVIRONMENT"
    echo "Usage: ./deploy.sh [development|staging|production]"
    exit 1
    ;;
esac

echo "Deployment completed successfully!"
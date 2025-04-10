import fs from 'fs';
import path from 'path';

interface Task {
  title: string;
  description: string;
  plan: PlanStep[];
}

interface PlanStep {
  file: string;
  action: 'ADD' | 'CHANGE' | 'REMOVE';
  details: string;
}

const projectStructure = {
  'apps/nextjs-blog': [
    'app/api/route.ts',
    'app/blog/[slug]/page.tsx',
    'app/blog/page.tsx',
    'app/auth/login/page.tsx',
    'app/auth/signup/page.tsx',
    'app/layout.tsx',
    'components/ui/Button.tsx',
    'components/ui/Card.tsx',
    'components/layout/Header.tsx',
    'components/layout/Footer.tsx',
    'components/auth/AuthForm.tsx',
    'lib/auth.ts',
    'lib/api.ts',
    'next.config.mjs',
    'package.json',
  ],
  'apps/node-api': [
    'src/controllers/userController.ts',
    'src/controllers/postController.ts',
    'src/middlewares/auth.ts',
    'src/middlewares/error.ts',
    'src/routes/userRoutes.ts',
    'src/routes/postRoutes.ts',
    'src/models/User.ts',
    'src/models/Post.ts',
    'src/services/userService.ts',
    'src/services/postService.ts',
    'src/utils/logger.ts',
    'src/utils/validation.ts',
    'src/config/database.ts',
    'src/config/env.ts',
    'src/app.ts',
    'tests/unit/userService.test.ts',
    'tests/integration/userApi.test.ts',
    'package.json',
    'tsconfig.json',
  ],
  'apps/python-api': [
    'app/routes/user_routes.py',
    'app/routes/post_routes.py',
    'app/controllers/user_controller.py',
    'app/controllers/post_controller.py',
    'app/models/user.py',
    'app/models/post.py',
    'app/services/user_service.py',
    'app/services/post_service.py',
    'app/utils/logger.py',
    'app/utils/validation.py',
    'app/config.py',
    'app/main.py',
    'app/__init__.py',
    'tests/test_user_api.py',
    'tests/test_post_api.py',
    'requirements.txt',
    'Dockerfile',
  ],
  'drizzle': [
    'schema/users.ts',
    'schema/posts.ts',
    'schema/index.ts',
    'migrations/0000_initial.sql',
    'migrations/meta.json',
    'db.ts',
    'package.json',
  ],
  'packages/ui': [
    'components/Button.tsx',
    'components/Card.tsx',
    'index.ts',
    'package.json',
  ],
  'packages/auth': [
    'src/auth.ts',
    'src/jwt.ts',
    'src/index.ts',
    'package.json',
  ],
  'packages/config': [
    'eslint/index.js',
    'tsconfig/base.json',
    'package.json',
  ],
  'packages/utils': [
    'src/formatting.ts',
    'src/validation.ts',
    'src/index.ts',
    'package.json',
  ],
  'blog': [
    '01-setup.md',
    '02-http-basics.md',
    '03-restful-api.md',
    '04-authentication.md',
    '05-testing-and-deployment.md',
  ],
  'resources': [
    'http-basics.md',
    'rest-fundamentals.md',
    'authentication.md',
    'api-testing.md',
  ],
  'docs/node-api': [
    'swagger.json',
    'index.html',
  ],
  'docs/python-api': [
    'swagger.json',
    'index.html',
  ],
  'tools/postman-collections': [
    'node-api.json',
    'python-api.json',
  ],
  'tools/swagger-ui': [
    'index.html',
    'config.js',
  ],
  'tools/scripts': [
    'setup.sh',
    'build.sh',
    'deploy.sh',
  ],
  'diagrams': [
    'architecture.png',
    'how-to-learn-api-development.webp',
  ],
  'generator': [
    'doc-generator.ts',
    'package.json',
  ],
};

function generateTask(title: string, description: string, plan: PlanStep[]): Task {
  return {
    title,
    description,
    plan,
  };
}

const exampleTask = generateTask(
  'Implement User Authentication',
  'Implement user authentication using JWT in the Node.js API.',
  [
    {
      file: 'src/middlewares/auth.ts',
      action: 'ADD',
      details: 'Create a new file for authentication middleware. Implement a function to verify JWT tokens.',
    },
    {
      file: 'src/controllers/authController.ts',
      action: 'ADD',
      details: 'Create a new file for authentication controller. Implement functions for user registration and login.',
    },
    {
      file: 'src/routes/authRoutes.ts',
      action: 'ADD',
      details: 'Create a new file for authentication routes. Define routes for user registration and login.',
    },
    {
      file: 'src/models/User.ts',
      action: 'CHANGE',
      details: 'Add fields for storing hashed passwords. Implement a method to compare passwords.',
    },
    {
      file: 'src/services/authService.ts',
      action: 'ADD',
      details: 'Create a new file for authentication service. Implement functions for hashing passwords and generating JWT tokens.',
    },
    {
      file: 'src/app.ts',
      action: 'CHANGE',
      details: 'Add the authentication routes to the main application.',
    },
  ]
);

console.log(JSON.stringify(exampleTask, null, 2));

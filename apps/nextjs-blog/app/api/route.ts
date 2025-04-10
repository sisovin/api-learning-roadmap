import { NextApiRequest, NextApiResponse } from 'next';
import { getUserProfile, updateUserProfile, registerUser, loginUser } from '../../lib/auth';
import { createPost, getPosts, getPostById, updatePost, deletePost } from '../../lib/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'POST':
      if (req.url === '/api/register') {
        return registerUser(req, res);
      } else if (req.url === '/api/login') {
        return loginUser(req, res);
      } else if (req.url === '/api/posts') {
        return createPost(req, res);
      }
      break;
    case 'GET':
      if (req.url === '/api/profile') {
        return getUserProfile(req, res);
      } else if (req.url === '/api/posts') {
        return getPosts(req, res);
      } else if (req.url.startsWith('/api/posts/')) {
        const postId = req.url.split('/').pop();
        return getPostById(req, res, postId);
      }
      break;
    case 'PUT':
      if (req.url === '/api/profile') {
        return updateUserProfile(req, res);
      } else if (req.url.startsWith('/api/posts/')) {
        const postId = req.url.split('/').pop();
        return updatePost(req, res, postId);
      }
      break;
    case 'DELETE':
      if (req.url.startsWith('/api/posts/')) {
        const postId = req.url.split('/').pop();
        return deletePost(req, res, postId);
      }
      break;
    default:
      res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

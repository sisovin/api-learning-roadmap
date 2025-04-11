import React, { useEffect, useState } from 'react';
import { getPosts } from '../../lib/api';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, totalPages } = await getPosts(currentPage);
      setPosts(data);
      setTotalPages(totalPages);
    };

    fetchPosts();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-md"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPage;

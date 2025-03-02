"use client";

import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { blogServices } from '@/services/blog';
import { Blog } from '@/types';
import BlogCard from '../../components/BlogCard';
import PageHeader from '@/components/PageHeader';

const BlogsPage = () => {
	const [blogs, setBlogs] = useState<Blog[]>([]);
	const [page, setPage] = useState<number>(1);

	useEffect(() => {
		const fetchBlogs = async () => {
			blogServices.getBlogs(9, page)
        .then((res) => {
          setBlogs(res.data);
        })
        .catch(() => {
          setBlogs([]);
        });
		};
		fetchBlogs();
	}, [page]);

	const handleNextPage = () => {
		setPage((prevPage) => prevPage + 1);
	};

	const handlePreviousPage = () => {
		setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
	};

	return (
		<div className="mb-8">
			<PageHeader title="Bloglar" />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-32 mx-8">
				{blogs.map((blog: Blog) => (
					<BlogCard key={blog.id} blog={blog} index={blog.id} />
				))}
			</div>
			<div className="flex justify-center mt-8">
				<button onClick={handlePreviousPage} disabled={page === 1} className='disabled:opacity-50'>
					<FaArrowLeft />
				</button>
				<span className="mx-4">Sayfa {page}</span>
				<button onClick={handleNextPage} disabled={blogs.length <= page * 9} className='disabled:opacity-50'>
					<FaArrowRight />
				</button>
			</div>
		</div>
	);
};

export default BlogsPage;

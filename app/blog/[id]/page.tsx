'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';

import BlogHeader from '@/components/BlogHeader';
import { blogServices } from '@/services/blog';
import { Blog, Media } from '@/types';

const BlogDetailPage = () => {
	const params = useParams();
	const [blog, setBlog] = useState<Blog>();
	const [featuredImage, setFeaturedImage] = useState<Media>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchBlog = async () => {
			blogServices.getContent(params?.id as string)
				.then((res) => {
					setBlog(res.data);
					setIsLoading(false);
				})
				.catch(() => {
					toast.error('Blog verileri alınırken hata oluştu. Lütfen daha sonra tekrar deneyin.');
					setBlog(undefined);
					setIsLoading(false);
				})
		};
		fetchBlog();
	}, [params?.id]);

	useEffect(() => {
		if (blog?._links['wp:featuredmedia']) {
			const mediaId = blog._links['wp:featuredmedia'][0].href.split('/').pop() as string;
			blogServices.getBlogMedia(mediaId)
				.then((res) => {
					setFeaturedImage(res.data);
					setIsLoading(false);
				})
				.catch(() => {
					toast.error('Blog görseli alınırken hata oluştu. Lütfen daha sonra tekrar deneyin.');
					setFeaturedImage(undefined);
					setIsLoading(false);
				});
		}
	}, [blog]);

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin" />
			</div>
		);
	}

	return (
		<div className="mt-16 lg:mt-32">
			<BlogHeader
				title={blog?.title.rendered as string}
				featuredImage={featuredImage?.source_url}
				publishedDate={blog?.date as string}
				contentLength={blog?.content.rendered.length as number}
			/>
			<article className="prose lg:prose-xl m-8 lg:m-32">
				<div dangerouslySetInnerHTML={{ __html: blog?.content.rendered as string | TrustedHTML }} />
			</article>
		</div>
	);
};

export default BlogDetailPage;

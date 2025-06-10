"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

type BlogPost = {
  objectId: string;
  title: string;
  author: string;
  publishDate: string;
  image: string;
  content: string;
};

export default function BlogList() {
  const { user } = useAuth();
  const router = useRouter();

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        "https://topdeer-us.backendless.app/api/data/bloglist",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const data = await res.json();
      console.log("Blog posts:", data);
      setBlogPosts(data);
    } catch (err) {
      console.error("Failed to fetch blog posts", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (objectId: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;

    try {
      const res = await fetch(
        `https://topdeer-us.backendless.app/api/data/bloglist/${objectId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        alert("Blog post deleted!");
        fetchBlogs();
      } else {
        alert("Failed to delete blog post");
      }
    } catch (err) {
      console.error("Error deleting blog post:", err);
    }
  };

  const handleEdit = (objectId: string) => {
    router.push(`/edit-blog/${objectId}`);
  };

  if (loading) {
    return <div className="p-8">Loading blog posts...</div>;
  }

  return (
    <section
      id="BLOGLIST"
      className="grid w-full min-h-screen place-items-center bg-cream px-4 sm:px-6 md:px-8 lg:px-12 py-10"
    >
      <div className="w-full max-w-6xl space-y-8">
        <h1 className="font-DM-Serif text-4xl sm:text-5xl text-center mb-8 text-orange">
          Blog List
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.objectId}
              className="w-full rounded-2xl shadow-lg overflow-hidden bg-white flex flex-col"
            >
              <div className="relative w-full h-[200px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="flex flex-col justify-between p-5 flex-grow space-y-3">
                <div>
                  <p className="font-montserrat font-black uppercase text-lg text-black mb-2">
                    {post.title}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {post.author} |{" "}
                    {new Date(post.publishDate).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-base text-deep-brown text-justify">
                    {post.content?.slice(0, 120)}...
                  </p>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <button className="p-2 px-4 bg-orange font-montserrat text-white rounded-full hover:bg-brown hover:text-white transition-all duration-300">
                    Read More
                  </button>

                  {user?.role === "admin" && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(post.objectId)}
                        className="flex-1 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.objectId)}
                        className="flex-1 px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-all duration-300"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

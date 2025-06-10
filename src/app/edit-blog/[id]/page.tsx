"use client";

import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { useEffect, useState } from "react";

export default function EditBlogPage() {
  const { user } = useAuth();
  const router = useRouter();
  const params = useParams();
  const blogId = params?.id as string;

  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (user.role !== "admin") {
      router.push("/");
    }
  }, [user, router]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `https://topdeer-us.backendless.app/api/data/bloglist/${blogId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        const data = await res.json();
        setTitle(data.title);
        setAuthorName(data.author);
        setContent(data.content);
        setImageUrl(data.image);
      } catch (err) {
        console.error("Failed to fetch blog post", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.role === "admin" && blogId) {
      fetchBlog();
    }
  }, [user, blogId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://topdeer-us.backendless.app/api/data/bloglist/${blogId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            author: authorName,
            content,
            image: imageUrl,
          }),
        }
      );

      if (res.ok) {
        alert("Blog post updated!");
        router.push("/blog");
      } else {
        alert("Failed to update blog post");
      }
    } catch (err) {
      console.error("Error updating blog post:", err);
    }
  };

  if (!user || user.role !== "admin" || loading) {
    return <div className="p-8">Loading blog post...</div>;
  }

  return (
    <section className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Author</label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            Content (Markdown / Plain Text)
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 h-40"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-orange text-white rounded hover:bg-orange-700"
        >
          Update Blog
        </button>
      </form>
    </section>
  );
}

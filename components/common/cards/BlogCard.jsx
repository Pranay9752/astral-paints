
export const BlogCard = ({ blog }) => (
    <div className="relative  overflow-hidden h-full group shadow-md">
      <img
        src={blog.featuredImage.node.sourceUrl}
        alt={blog.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
        <p className="text-white text-sm mb-1">
          {new Date(blog.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
        <h3 className="text-white text-base font-semibold leading-snug">
          {blog.title}
        </h3>
      </div>
    </div>
  );
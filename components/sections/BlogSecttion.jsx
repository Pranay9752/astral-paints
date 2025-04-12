
import SectionLayout from "../layouts/SectionLayout";

export default function BlogSection({
    blogs = [],
  title = "Latest",
  subtitle = "Our Blog",
}) {


  if (!blogs || blogs.length === 0) {
    return null;
  }

  return (
    <SectionLayout
    id={'blogs'}
      title={title}
      subtitle={subtitle}
      classname={"bg-gradient-to-r from-green-400"}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="flex flex-col gap-4">
          {blogs.slice(1, 3).map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>

        <div className="relative h-full md:min-h-[500px]  overflow-hidden group shadow-lg">
          <img
            src={blogs[0].featuredImage.node.sourceUrl}
            alt={blogs[0].title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
            <p className="text-white text-sm mb-1">
              {new Date(blogs[0].date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
            <h2 className="text-white text-xl font-semibold mb-4">
              {blogs[0].title}
            </h2>
            <button className="bg-white text-green-500 font-semibold text-sm px-4 py-2 rounded-full w-max hover:bg-blue-100 transition">
              Read More
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {blogs.slice(3, 5).map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}

const BlogCard = ({ blog }) => (
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

import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';
import SectionLayout from '../layouts/SectionLayout';

export default function BlogSection({ posts = [
    {
        "featuredImage": {
            "node": {
                "sourceUrl": "https://astralpaints.kwebmakerdigitalagency.com/wp-content/uploads/2024/06/blog1.webp",
                "slug": "blog1"
            }
        },
        "slug": "10-stylish-cream-colour-combination-for-your-home-duplicate",
        "title": "10 Stylish Cream Colour Combination for Your Home (DUPLICATE)",
        "date": "2024-07-01T11:25:09"
    },
    {
        "featuredImage": {
            "node": {
                "sourceUrl": "https://astralpaints.kwebmakerdigitalagency.com/wp-content/uploads/2024/06/blog1.webp",
                "slug": "blog1"
            }
        },
        "slug": "colour-combination-for-your-home-duplicate",
        "title": "Colour Combination for Your Home (DUPLICATE)",
        "date": "2024-07-01T11:24:09"
    },
    {
        "featuredImage": {
            "node": {
                "sourceUrl": "https://astralpaints.kwebmakerdigitalagency.com/wp-content/uploads/2024/06/blog1.webp",
                "slug": "blog1"
            }
        },
        "slug": "10-stylish-cream-colour-combination-for-your-home",
        "title": "10 Stylish Cream Colour Combination for Your Home",
        "date": "2024-06-25T11:09:10"
    },
    {
        "featuredImage": {
            "node": {
                "sourceUrl": "https://astralpaints.kwebmakerdigitalagency.com/wp-content/uploads/2024/06/blog1.webp",
                "slug": "blog1"
            }
        },
        "slug": "colour-combination-for-your-home",
        "title": "Colour Combination for Your Home",
        "date": "2024-06-24T11:09:37"
    }
]
    , title = "Latest", subtitle = "Our Blog" }) {
    // Format the date to match the design (e.g., "10 Jan 2024")
    const formatPostDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd MMM yyyy');
    };

    // Return early if no posts are available
    if (!posts || posts.length === 0) {
        return null;
    }

    // Feature the first post (or a specified featured post)
    const featuredPost = posts[0];
    const remainingPosts = posts.slice(1, 5); // Get the next 4 posts

    return (
        <SectionLayout title={title} subtitle={subtitle} classname={'bg-gradient-to-r from-green-400'}>

<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6">
                {/* Featured post - takes up the middle column, full height */}
                <div className="md:col-span-1 order-1 md:order-1">
                    <BlogCard post={remainingPosts[0]} />
                    <div className="mt-6">
                        <BlogCard post={remainingPosts[1]} />
                    </div>
                </div>

                <div className="md:col-span-1 ">
                    <div className="relative h-full">
                        <Link href={`/blog/${featuredPost.slug}`} className="block h-full">
                            <div className="relative h-full  overflow-hidden rounded-md">
                                <Image
                                    src={featuredPost.featuredImage.node.sourceUrl}
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                                    <div className="absolute bottom-0 left-0 p-6 text-white">
                                        <p className="mb-2">{formatPostDate(featuredPost.date)}</p>
                                        <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                                        <button className="bg-white text-blue-500 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="md:col-span-1 order-2 md:order-3">
                    <BlogCard post={remainingPosts[2]} />
                    <div className="mt-6">
                        <BlogCard post={remainingPosts[3]} />
                    </div>
                </div>
            </div>

            {/* <div className="grid grid-cols-3 grid-rows-2 gap-4">
            
                <div><BlogCard post={posts[0]} /></div>
                <div className="col-start-1 row-start-2"><BlogCard post={posts[1]} /></div>
                <div className="row-span-2 col-start-2 row-start-1"><BlogCard post={posts[2]} /></div>
                <div className="col-start-3 row-start-1"><BlogCard post={posts[3]} /></div>
                <div className="col-start-3"><BlogCard post={posts[4]} /></div>
            </div> */}
        </SectionLayout>

    );
}

// Reusable Blog Card Component
function BlogCard({ post }) {
    if (!post) return null;

    const formatPostDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd MMM yyyy');
    };

    return (
        <Link href={`/blog/${post.slug}`} className="block group">
            <div className="relative  overflow-hidden rounded-md">
                <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                        <p className="text-sm mb-1">{formatPostDate(post.date)}</p>
                        <h3 className="font-bold text-lg leading-tight">{post.title}</h3>
                    </div>
                </div>
            </div>
        </Link>
    );
}
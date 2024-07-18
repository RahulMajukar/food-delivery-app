import ProductCard from "./ProductCard";
var products = [
    {
        "title": "Adobe Photoshop CC 2022",
        "location": "Lisbon, Portugal",
        "price": "$850",
        "image_url": "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "rating": null
    },
    {
        "title": "The Hilton Hotel",
        "location": "Lisbon, Portugal",
        "price": "$850",
        "image_url": "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "rating": "4.9"
    },
    {
        "title": "The Hilton Hotel",
        "location": "Lisbon, Portugal",
        "price": "$450",
        "image_url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "rating": null
    },
    {
        "title": "The Hilton Hotel",
        "location": "Lisbon, Portugal",
        "price": "$450",
        "image_url": "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "rating": null
    },
    {
        "title": "The Hilton Hotel",
        "location": "Lisbon, Portugal",
        "price": "$450",
        "image_url": "https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        "rating": null
    },
    {
        "title": "The Hilton Hotel",
        "location": "Lisbon, Portugal",
        "price": "$450",
        "image_url": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        "rating": null
    }
]

const Products = () => {
    return (
        <>
            {/* Title */}
            <div className="pb-20 bg-white">
                <h1 className="text-center text-2xl font-bold text-gray-800">All Products</h1>
                <div class="mt-6 md:flex md:items-center md:justify-between">
                    <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                        <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                            View all
                        </button>

                        <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                            Monitored
                        </button>

                        <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                            Unmonitored
                        </button>
                    </div>

                    <div class="relative flex items-center mt-4 md:mt-0">
                        <span class="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </span>

                        <input type="text" placeholder="Search" class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>
            </div >


            {/* Product List */}
            <section section className="py-10 bg-gray-100" >
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <ProductCard
                        imageSrc="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        title="Adobe Photoshop CC 2022"
                        location="Lisbon, Portugal"
                        price="$850"
                        ratings="3.6"
                    />
                    <ProductCard
                        imageSrc="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        title="The Hilton Hotel"
                        location="Lisbon, Portugal"
                        price="$850"
                        ratings="4.9"
                    />

                    {products.map(item =>
                        <ProductCard
                            imageSrc={item.image_url}
                            title={item.title}
                            location={item.location}
                            price={item.price}
                            ratings={item.rating}
                        />
                    )}
                    {/* Add more <ProductCard /> components here for additional products */}
                </div>

            </section>
        </>
    );
};

export default Products;
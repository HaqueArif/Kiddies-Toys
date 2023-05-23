import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import loadingGif from '../../assets/ohters/loading.gif'

const Blog = () => {
    
    const { loading } = useContext(AuthContext);


    useEffect(()=>{
        document.title = 'KIDDIES | Blogs'
      },[]);

      if(loading){
        return <div className='min-h-screen flex justify-center items-center'>
        <img src={loadingGif} alt="" />
    </div>
    }
    
    return (
        <div className="mx-auto px-2 py-8 pt-20 md:px-20 bg-slate-50">
            <div className='bg-base-100 shadow-md px-2 md:px-20 pt-20 pb-40 rounded-2xl'>
                <h1 className="text-4xl font-bold mb-4">Answering Common Web Development Questions</h1>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">What is an Access Token and Refresh Token? How Do They Work and Where Should We Store Them on the Client-Side?</h2>
                    <p>
                        Access tokens and refresh tokens are essential in authentication systems. An access token authorizes a client to access protected resources on behalf of a user. It is obtained after successful authentication. A refresh token is a long-lived credential that allows obtaining new access tokens without re-authentication. Storing access tokens securely is crucial. The recommended approach is using HTTP-only cookies to prevent access from JavaScript, or local storage with potential vulnerability to XSS attacks.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Comparing SQL and NoSQL Databases</h2>
                    <p>
                        SQL and NoSQL are two types of database systems with different characteristics.
                        SQL databases are based on the relational model and use tables to store data, while NoSQL databases are schema-less and store
                        data in various formats.SQL databases have a predefined schema that enforces data integrity and consistency. They are suitable for applications that
                        require complex relationships and transactions. Examples of SQL databases include MySQL, PostgreSQL, and Oracle.NoSQL databases, on the other hand, are designed to handle large amounts of unstructured or semi-structured data. They do not
                        have a fixed schema and offer more flexibility. NoSQL databases are suitable for scenarios where scalability and performance
                        are crucial. Examples of NoSQL databases include MongoDB, Redis, and Cassandra.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">What is Express.js? What is Nest.js?</h2>
                    <p>
                        Express.js is a popular web application framework for Node.js. It provides a minimalistic and flexible approach to building
                        web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, and middleware integration.
                        It is known for its simplicity, speed, and extensive ecosystem of middleware and plugins.
                    </p>
                    <p>
                        Nest.js, on the other hand, is a progressive Node.js framework for building scalable and efficient server-side applications.
                        It is built on top of Express.js and provides a modular and opinionated structure for developing robust and maintainable applications.
                        Nest.js embraces modern JavaScript and TypeScript features and incorporates concepts from other frameworks like Angular and Spring.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-2">What is MongoDB Aggregate and How Does It Work?</h2>
                    <p>
                        MongoDB Aggregate is a powerful feature for data aggregation and processing in MongoDB. It allows complex operations like filtering, grouping, sorting, and calculating aggregations on large datasets. It works through a pipeline approach, where multiple stages are applied in a specified order to transform and analyze the data.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
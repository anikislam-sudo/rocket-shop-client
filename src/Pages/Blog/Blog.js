import React from 'react';
import blog from "../../Assets/blog.jpeg"
import useTitle from '../../Hooks/useTitle';
import "./Blog.css"
const Blog = () => {
    useTitle("Blog");
    return (
        <div>
            <img className='blog mx-auto m-4' src={blog} alt="" srcset="" />

            <div className='mb-4 '>

                <div tabIndex={0} className="collapse collapse-plus mb-2 bg-teal-300 border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Difference between SQL and NoSQL.
                    </div>
                    <div className="collapse-content">
                        <p className='font-semibold'> SQL-RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) but NoSQL- Non-relational or distributed database system.
                            <br /> SQL- databases have fixed or static or predefined schema but  NoSQL-have dynamic schema
                            <br /> SQL-databases are not suited for hierarchical data storage but NoSQL-databases are best suited for hierarchical data storage.
                            <br />SQL-Vertically Scalable but NoSQL-Horizontally scalable
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus mb-2 bg-teal-300 border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is JWT, and how does it work?
                    </div>
                    <div className="collapse-content">
                        <p className='font-semibold'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus mb-2 bg-teal-300 border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is the difference between javascript and NodeJS?
                    </div>
                    <div className="collapse-content">
                        <p className='font-semibold'> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
                            Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus mb-2 bg-teal-300 border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does NodeJS handle multiple requests at the same time?
                    </div>
                    <div className="collapse-content">
                        <p className='font-semibold'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                    </div>
                </div>
            </div>



        </div>

    );
};

export default Blog;
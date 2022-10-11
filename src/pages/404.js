import React from "react";
import { Link } from "gatsby";

import Layout from "../components/ui/Layout";
import Seo from "../components/SEO/Seo";

const Error = () => {
    return (
        <Layout>
            <Seo title="Not Found" />
            <div className="page">
                <div className="content">
                    <div class="header margin-btm--l">
                        Oh no, <br />
                        We can't seem to find the page you're looking for...
                    </div>
                    <div class="body">
                        Please try returning to our{" "}
                        <Link to="/" tag="a">
                            home page
                        </Link>{" "}
                        and see if you can find what you're looking for from there.
                    </div>
                    <div />
                    <div class="body">
                        For anything urgent, simply drop us a message we will get back to yoü very
                        shortly -
                    </div>
                    <span class="header margin-btm--xl normal">
                        <a href="mailto:hello@nutefoods.com">hello@nutefoods.com</a>
                    </span>
                    .
                </div>
            </div>
        </Layout>
    );
};

export default Error;

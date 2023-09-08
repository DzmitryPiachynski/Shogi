import React from "react";
import './links.css'

function Links() {
    return (
        <div className="holder">
            <h1>Useful links</h1>
            <ul>
                <li>
                    <a href="https://example.com">Example Website</a>: A website for examples.
                </li>
                <li>
                    <a href="https://google.com">Google</a>: The search engine giant.
                </li>
                <li>
                    <a href="https://github.com">GitHub</a>: The world's leading software development platform.
                </li>
                {/* Добавьте еще ссылок с описаниями по вашему выбору */}
            </ul>
        </div>
    );
}

export default Links;
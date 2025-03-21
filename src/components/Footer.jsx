import React from "react";

function Footer() {
    return (
        <div className="w-[670px] mx-auto flex justify-between items-center py-6">
            {/* Bloc gauche */}
            <div className="flex flex-col">
                <h5>NutriPlan</h5>
                <p>© 2024. All rights reserved</p>
                <p>A template by Julien Vier. Built in Framer.</p>
            </div>

            {/* Bloc droit avec deux colonnes */}
            <div className="flex gap-12">
                <div>
                    <h5>Template</h5>
                    <p>Features</p>
                    <p>Testimonials</p>
                    <p>FAQ</p>
                </div>
                <div>
                    <h5>Contact</h5>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>TikTok</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

import React from 'react'

export default function Footer() {
    return (
        <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">
                        <img src="/img/logo_.png" alt="Heroes & Villains" class=" my-auto"
                            style={{ maxWidth: '250px', minHeight: '30px' }} />
                    </div>

                    <div class="col-lg-4 my-3 my-lg-0 d-none d-lg-block">
                    </div>

                    <div class="col-lg-4 text-lg-end">
                        <a class="btn btn-dark btn-social mx-2 grow" target="_blank"
                            href="https://twitter.com/heroes8villains?s=21"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2 grow" target="_blank"
                            href="https://discord.com/invite/XJwV38jhJm"><i class="fab fa-discord"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

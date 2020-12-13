import React from 'react';
import "../styles/LodingPage.css"

function LodingPage() {
    return (
        <div>
            <main>
                <div class="preloader">
                    <div class="preloader__square">			</div>
                    <div class="preloader__square">			</div>
                    <div class="preloader__square">			</div>
                    <div class="preloader__square">			</div>
                </div>
                <div class="status">Loading<span class="status__dot">.</span><span class="status__dot">.</span><span class="status__dot">.</span></div>
            </main>
        </div>
    )
}

export default LodingPage

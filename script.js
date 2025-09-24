// Configuration - Update these values for each certificate
const certificateConfig = {
    imagePath: 'Certificate.jpg',    // Path to your certificate image
    pdfPath: 'Certificate.pdf',      // Path to your certificate PDF
    storyPath: 'Certificate.txt',          // Path to your story file
    recipientName: 'Certificate Holder',          // Default recipient name
    program: 'Certificate Program',               // Program name
    organization: 'Organization Name'             // Organization name
};

// Load certificate from URL parameters or config
function loadCertificate() {
    const urlParams = new URLSearchParams(window.location.search);
    const certId = urlParams.get('cert') || 'default';
    
    // Update image source
    const img = document.getElementById('certificateImage');
    img.src = urlParams.get('img') || certificateConfig.imagePath;
    
    // Update recipient name if provided
    if (urlParams.get('name')) {
        certificateConfig.recipientName = urlParams.get('name');
    }
    
    // Update program if provided
    if (urlParams.get('program')) {
        certificateConfig.program = urlParams.get('program');
    }
    
    // Update organization if provided
    if (urlParams.get('org')) {
        certificateConfig.organization = urlParams.get('org');
    }
    
    // Set image error handler
    img.onerror = function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjhGOUZBIiBzdHJva2U9IiNERUUyRTYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iMTAgMTAiLz4KPHN2ZyB4PSI0MDAiIHk9IjMwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkM3NTdEIiBzdHJva2Utd2lkdGg9IjIiLz4KPHN2ZyB4PSIzNSIgeT0iMzUiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkM3NTdEIiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iMTAiIGN5PSI4IiByPSIzIiBmaWxsPSIjNkM3NTdEIi8+Cjxwb2x5bGluZSBwb2ludHM9IjQsNSAxNSwyMCAyNSwxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkM3NTdEIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+CjwvY2lyY2xlPgo8L3N2Zz4KPHR0ZXh0IHg9IjQwMCIgeT0iNDIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkM3NTdEIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkNlcnRpZmljYXRlIEltYWdlIFBsYWNlaG9sZGVyPC90ZXh0Pgo8dGV4dCB4PSI0MDAiIHk9IjQ0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzZDNzU3RCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0Ij5VcGRhdGUgdGhlIGltYWdlIHBhdGggaW4gdGhlIGNvbmZpZ3VyYXRpb248L3RleHQ+Cjwvc3ZnPg==';
    };
}

function downloadImage() {
    const img = document.getElementById('certificateImage');
    const link = document.createElement('a');
    link.href = img.src;
    link.download = `${certificateConfig.recipientName}_Certificate.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadPDF() {
    const link = document.createElement('a');
    link.href = certificateConfig.pdfPath;
    link.download = `${certificateConfig.recipientName}_Certificate.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadStory() {
    const link = document.createElement('a');
    link.href = certificateConfig.storyPath;
    link.download = `${certificateConfig.recipientName}_Story.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function addToLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(`Certificate: ${certificateConfig.program}`);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`, '_blank');
}

function shareOnTwitter() {
    const text = encodeURIComponent(`🎓 Just received my certificate for ${certificateConfig.program} from ${certificateConfig.organization}!`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareOnWhatsApp() {
    const text = encodeURIComponent(`Check out my certificate: ${certificateConfig.program} - ${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
}

function openModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const img = document.getElementById('certificateImage');
    
    modal.style.display = 'block';
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', loadCertificate);

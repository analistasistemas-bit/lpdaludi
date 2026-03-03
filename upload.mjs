import fs from 'fs';

async function uploadLogo() {
    const filePath = '/Users/diego/Desktop/IA/LandingPage_Daludi/imagens_daludi/LogoHorizontalprincipal.png';
    const buffer = fs.readFileSync(filePath);

    try {
        const res = await fetch('https://2xnqiy3h.us-east.insforge.app/storage/v1/object/daludi-assets/LogoHorizontalprincipal.png', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ik_c2fc643e3532231d35444eb0a72a9039',
                'Content-Type': 'image/png'
            },
            body: buffer
        });
        const text = await res.text();
        console.log('Status:', res.status);
        console.log('Response:', text);
    } catch (err) {
        console.error(err);
    }
}

uploadLogo();

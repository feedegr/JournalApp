

export const fileUpload = async ( file ) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dwskjtcoy/image/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'reactjournal');
    formData.append('file', file);
    formData.append('api_key', '442126857723444')

    try {
        
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
    });

    if ( resp.ok ) {
        const cloudResp = await resp.json();
        return cloudResp.secure_url;
    } else {
        throw await resp.json();
    }
    
    }   
    catch (error) {
        throw error;
    }
    
}
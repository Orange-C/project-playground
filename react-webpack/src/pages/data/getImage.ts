async function getImage() {
    const res = await fetch('/preview.json');
    return await res.json();
}

export default getImage;

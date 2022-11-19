function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input")
    imageInput.addEventListener("change", function(){
        const reader = new FileReader()
        reader.addEventListener("load", ()=>{
            const uploadImage = reader.result
            changeMemePicture(uploadImage)
            document.querySelector("#display-image").style.backgroundImage = `url(${uploadImage})`
        })
        reader.readAsDataURL(this.files[0])
    })
}



async function mapImageList(){
   const memesObject = [
    {
        "name": "Bob1",
        "path": "pictures/spongebobmeme1.jpg"
    },
    {
        "name": "Patrick",
        "path": "pictures/spongebobmeme2.jpg"
    },
    {
        "name": "Bob2",
        "path": "pictures/spongebobmeme3.jpg"
    },
    {
        "name": "Bob3",
        "path": "pictures/spongebobmeme4.jpg"
    },
    {
        "name": "Bob4",
        "path": "pictures/spongebobmeme5.jpg"
    },
   ]

   return memesObject

}

async function createGallery(ImageList){
const memeSelector = document.querySelector("#memes-list")
ImageList.forEach(picture => {
    let newOption = document.createElement("option")
    newOption.text = picture.name.toUpperCase()
    newOption.value = picture.path
    memeSelector.appendChild(newOption)
});
}

async function changeMemePicture(photo){
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}

async function main(){
    const memesImageList = await mapImageList()
    enablePhotoUpload()
    await createGallery(memesImageList)
    await changeMemePicture(memesImageList[0].path)
}

main()


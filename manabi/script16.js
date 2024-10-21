const zipForm = document.forms.zipform;

zipForm.zipcode.addEventListener('input', (event) => {

    if(event.target.value.length === 7){
        fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${event.target.value}`)
        
        .then(response => response.json())
        .then((data) => {
            zipForm.prefecture.value = data.results[0].address1;
            zipForm.city.value = data.results[0].address2;
            zipForm.town.value = data.results[0].address3;

        })
        .catch(error => console.log(error))
    }
});

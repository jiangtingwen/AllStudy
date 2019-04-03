function generateHashtag(str){
    // if(str.length>140||str==='')
    //     return false;
       
    //     str=str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
    //     str='#'+str;
    //     return str;
    return str.length>140||str===''? false: 
    '#'+str.split(' ').map(capitalize).join(' ')
}
    function capitalize (word){
        return word.charAt(0).toUpperCase()+word.slice(1);
        console.log(word);
    }

 console.log(generateHashtag('hello miss dong'));
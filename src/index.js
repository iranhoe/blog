import * as fileLoader from './fileLoader.js';
import * as paramReader from './paramReader.js';

(function() {
    let init= () => {
        let post = paramReader.getHashParameterByName("post");
        let lang = paramReader.getHashParameterByName("lang");
        lang = lang || "es-mx";
        post = post || "test";
        fileLoader.loadPost(lang, post);
        fileLoader.loadSticky(post);
    }

    init();
    $(window).bind("hashchange", init);
})();

$(document).ready(function () {
   const regex_title = /## (.*)\r\n(.*)/gm;
   fetch('https://api.github.com/repos/Murakumo-JP/FFXIVJobGuideRU/issues/3/comments')
   .then(function(response){
      response.text().then(function(json){
         let news = JSON.parse(json);
         let html = '';
         let news_max_count = 4;
         let news_count = news.length >= news_max_count ? news_max_count : news.length;
         for (let i = news.length - 1; i >= news.length - news_count; i--) {
            let body = '';
            if(regex_title.test(news[i].body)){
               let title = news[i].body.replaceAll(regex_title, '$1');
               //let text = news[i].body.replaceAll(regex_title, '$2');
               //body = title+': ' +text;
               body = title;
            } else {
               body = news[i].body;
            }
            body = body.replaceAll('\r\n', '<br/>');
            let date = new Date(news[i].updated_at).toLocaleDateString(); 
            html += '<div><span>'+ date + '</span><a target="_blank" href="'+news[i].html_url+'">'+body+'</a></div>';
         }
         document.getElementById('main_news').innerHTML = html;
         //console.log(json);
      });
   })
   .catch(function(reason){
      console.log(reason);
      document.getElementById('main_news').innerHTML = '';
   })
});
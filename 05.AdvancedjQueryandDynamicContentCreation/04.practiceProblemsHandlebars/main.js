var postContext = {
    posts: [
        {
            title: 'Sed ut perspiciatis',
            published: 'April 1, 2015',
            body: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>',
            tags: ['html', 'javascript', 'css', 'jquery'],
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            published: 'March 24, 2015',
            body: '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo architecto vitae molestias voluptatem? Excepturi repellat porro laboriosam, neque temporibus facilis perspiciatis optio odit nulla. Molestias fuga non aperiam velit aliquam.</p>',
            tags: [],
        }
    ]
    
}


Handlebars.registerPartial(
    "tags",
    `<p>
        {{#if tags}}
            Tags: 
            {{#each tags}} 
                <strong>{{.}}</strong> 
            {{/each}}
        {{else}} 
            Not tagged 
        {{/if}}
    </p>`,
)

var post = $('#post').html();
var postFunction = Handlebars.compile(post);
var html = postFunction(postContext);
$(document.body).append(html);
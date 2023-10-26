import { Component } from '@angular/core';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html'
})
export class ArticleComponent {
    title = 'Whatever you want';
    content: string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquid dicta nobis, numquam ratione vel. Ullam dolor inventore quod similique, assumenda, eaque consectetur eveniet iusto laudantium suscipit maxime doloribus odit?";

    isTechRelated: boolean = true;getColor() {
    return this.isTechRelated === true ? 'blue' : 'yellow';
}
}


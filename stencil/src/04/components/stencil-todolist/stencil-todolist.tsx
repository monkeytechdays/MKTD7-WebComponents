import { Component, State, /* Listen */ } from '@stencil/core';

interface TodoItem {
    uid: number;
    text: string;
    completed: boolean;
}

@Component({
    tag: 'stencil-todolist',
    styleUrl: 'stencil-todolist.css',
})
export class StencilTodolist {
    @State() list: TodoItem[] = [
        { uid: 1, text: 'Learn about Web Components', completed: true },
        { uid: 2, text: 'Learn about Stencil', completed: false },
        { uid: 3, text: 'Share my knowledge', completed: false }
    ];

    // @Listen('todoCompleted') Here

    render() {
        // loop through this.list and return stencil-todoitem component with `uid`, `text` and `completed` props
        return (<span />);
    }
}
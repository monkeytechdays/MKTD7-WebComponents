import { Component, Prop /*, Event, EventEmitter */ } from '@stencil/core';

@Component({
    tag: 'stencil-todoitem',
    styleUrl: 'stencil-todoitem.css',
})
export class StencilTodoItem {
    @Prop() uid: number;
    @Prop() text: string;
    @Prop() completed: boolean;
    // @Event() todoCompleted here;

    handleOnComplete = () => { /* Should emit todoCompleted event with `this.uid` as argument  */ };

    render() {
        return (
            <div class={"/* add class 'completed' when this.completed === true */"}>
                <button>Toggle</button>
                <span>{this.text}</span>
            </div>
        );
    }
}
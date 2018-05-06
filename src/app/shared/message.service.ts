import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  public messages: string[] = [];
  constructor() { }

  public addMessage(value): void {
    this.messages.push(value);
  }

  public clearMessage(): void {
    this.messages = [];
  }
}

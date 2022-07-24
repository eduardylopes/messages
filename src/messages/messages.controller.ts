import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'messages';
  }

  @Post('')
  reateMessage(@Body('content') content: string) {
    return content;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return id;
  }
}

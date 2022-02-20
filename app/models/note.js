import Model, { attr } from '@ember-data/model';

export default class NoteModel extends Model {
  @attr('number') id;
  @attr('string') title;
  @attr('string') content;
  @attr('string') color;
  @attr('boolean') archived;
}

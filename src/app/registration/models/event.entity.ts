class Event {

  private readonly _id: number = 0;
  private readonly _name: string = '';
  private readonly _description: string = '';
  private readonly _scheduleAt: string = '';

  constructor({ id=0, name='', description='', scheduleAt=''}) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._scheduleAt = scheduleAt;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get scheduleAt(): string {
    return this._scheduleAt;
  }
}

export default Event;

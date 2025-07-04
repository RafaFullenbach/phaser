export interface Status {
  program_name: string,
  voltage: number,
  programmed_voltage: number,
  programmed_current: number,
  current: number,
  frequency: number,
  control_method: number,
  bird_on_bath: number,
  line_speed: number,
  partial_count: number,
  total_count: number,
  phaser_factor: number,
  signalICASQuality: number,
  stunning_time: number,
  temperature: number,
  voltageOut: number,
  temperatureCooler: number,
  programId: number,
  isPending: boolean,
  dateTime: Date,
  hourmeter_hours: number,
  hourmeter_minutes: number,
  errorsID: number,
  error: any[]
}
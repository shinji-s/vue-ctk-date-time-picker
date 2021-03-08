<template>
  <div
    id="app"
    :class="{'dark': darkMode}"
  >
    <div
      id="CtkDateTimePicker"
      class="ctk-date-time-picker"
    >
      <div id="time_picker">
        <CtkDateTimePicker
          v-model="reservationStartsAt"
          :minute-interval="15"
          format="YYYY-MM-DD HH:mm"
          output-format="YYYY-MM-DD HH:mm"
          formatted="MM-DD(ddd) HH:mm"
          :disabled-hours="['02', '03']"
          :disabled="autoRefresh"
          :no-label="true"
          :position-offset-x="'10px'"
          input-size="md"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import CtkDateTimePicker from './VueCtkDateTimePicker'

  export default {
    name: 'App',
    components: {
      CtkDateTimePicker
    },
    data () {
      return {
        devMode: false,
        reservationStartsAt: '2021-03-07 11:30',
        autoRefresh: false,
        booleanOptions: [
          'noHeader', 'autoClose', 'error', 'dark', 'overlay', 'noWeekendDays', 'noShortcuts',
          'noButton', 'onlyDate', 'range', 'onlyTime', 'inline', 'persistent', 'disabled', 'noButtonNow', 'noValueToCustomElem',
          'noKeyboard', 'right', 'noClearButton', 'noLabel'
        ],
        stringOptions: [
          'id', 'label', 'hint', 'color', 'buttonColor', 'position', 'format', 'formatted', 'outputFormat',
          'minDate', 'maxDate', 'inputSize', 'buttonNowTranslation', 'disabledWeekly', 'positionOffsetX'
        ],
        optionsNotEditable: [
          'customShortcuts', 'disabledDates', 'disabledHours', 'locale'
        ],
        intOptions: [
          'minuteInterval', 'firstDayOfWeek'
        ],
        demoComponents: [
          {
            id: '1',
            title: 'Date Time Picker',
            description: 'Date & Time selector',
            initial: '2018-04-07 20:26',
            value: '2018-04-07 20:26',
            editOption: false,
            options: {
              format: 'YYYY-MM-DD HH:mm',
              id: 'DateTimePicker',
              minDate: '2018-04-05',
              maxDate: '2018-04-24'
            }
          },
          {
            id: '2',
            title: 'Range Date Picker',
            description: 'Date Range selector - With custom element to trigger the component (only input or button)',
            editOption: false,
            initial: {
              start: '2018-04-05',
              end: '2018-04-20'
            },
            value: {
              start: '2018-04-05',
              end: '2018-04-20'
            },
            options: {
              slot: {
                type: 'button'
              },
              range: true,
              formatted: 'll',
              format: 'YYYY-MM-DD',
              color: 'purple',
              label: 'Select date range',
              id: 'RangeDatePicker'
            }
          },
          {
            id: '3',
            title: 'Date Picker',
            description: 'Date selector - right position - noLabel true - With large input (input-size="lg") - format: "MM-DD-YYYY" - formatted: "ll"',
            editOption: false,
            initial: '14-01-2019',
            value: '14-01-2019',
            options: {
              onlyDate: true,
              color: 'coral',
              inputSize: 'lg',
              buttonColor: 'green',
              buttonNowTranslation: 'Maintenant',
              id: 'DatePicker',
              format: 'DD-MM-YYYY',
              formatted: 'll',
              right: true,
              noLabel: true
            }
          },
          {
            id: '4',
            title: 'Time Picker - With small input (input-size="sm") & minute-interval="10"',
            description: 'Time selector',
            editOption: false,
            initial: '11:26 am',
            value: '11:26 am',
            options: {
              format: 'hh:mm a',
              formatted: 'hh:mm a',
              onlyTime: true,
              color: 'firebrick',
              minuteInterval: '10',
              label: 'Select time',
              inputSize: 'sm',
              id: 'TimePicker',
              noLabel: true
            }
          },
          {
            id: '5',
            title: 'Inline Picker',
            description: 'Inline selector with keyboard accessibility disabled & disabled weekly dates (available for all pickers)',
            editOption: false,
            initial: {
              start: '2018-04-05',
              end: '2018-04-20'
            },
            value: {
              start: '2018-04-05',
              end: '2018-04-20'
            },
            options: {
              inline: true,
              format: 'YYYY-MM-DD',
              formatted: 'll',
              range: true,
              id: 'InlinePicker',
              disabledWeekly: [0, 4, 6],
              noKeyboard: true
            }
          },
          {
            id: '6',
            title: 'Disabled Picker',
            description: '(disabled="true")',
            editOption: false,
            initial: 'null',
            value: null,
            options: {
              disabled: true,
              label: 'Is Disabled',
              id: 'DisabledPicker'
            }
          },
          {
            id: '7',
            title: 'Min and Max date with time in 24h-format',
            description: 'minDate: 2019-03-03 20:10, maxDate: 2019-06-24 09:14',
            initial: '2019-03-04 20:26',
            value: '2019-03-04 20:26',
            editOption: false,
            options: {
              format: 'YYYY-MM-DD HH:mm',
              id: 'DateTimePicker',
              minDate: '2019-03-03 20:10',
              maxDate: '2019-06-24 09:14'
            }
          },
          {
            id: '8',
            title: 'Min and Max date with time in 12h-format',
            description: 'minDate: 2019-03-03 8:10 pm, maxDate: 2019-06-24 9:14 am',
            initial: '2019-03-03 8:10 pm',
            value: '2019-03-06 8:20 pm',
            editOption: false,
            options: {
              format: 'YYYY-MM-DD h:mm a',
              id: 'DateTimePicker',
              minDate: '2019-03-03 8:10 pm',
              maxDate: '2019-03-24 9:14 am'
            }
          },
          {
            id: '9',
            title: 'Enabled/Disabled dates Picker',
            description: '',
            editOption: false,
            initial: { 'disabledDates': ['2021-02-22'], 'enabledDates': ['2021-02-21', '2021-02-22', '2021-02-23'] },
            value: '2021-02-22',
            options: {
              id: 'EnabledDisabledDatesPicker',
              disabledDates: ['2021-02-22'],
              enabledDates: ['2021-02-21', '2021-02-22', '2021-02-23'],
              inline: true,
              format: 'YYYY-MM-DD HH:mm'
            }
          }
        ],
        value: '06-01-2014 05:00',
        value2: null,
        value3: '2018-04-05T14:26',
        rangeValues: {
          start: '2018-04-04',
          end: '2018-04-20'
        },
        rangeValues2: {
          start: null,
          end: null
        },
        timePickerValue: '11:26',
        minuteInterval: 5,
        minuteInterval2: 10,
        hint: 'Error message',
        errorHint: true,
        timeFormat: 'hh:mm a',
        minDate: '2018-04-03',
        maxDate: '2018-04-12',
        darkMode: false,
        shortcutsTranslation: {
          'this_week': 'Cette semaine',
          'last_30_days': '30 derniers jours',
          'last_month': 'Mois précédent',
          'last_year': 'L\'année dernière'
        },
        disabledDates: ['2018-04-03', '2018-04-07', '2018-04-09', '2018-04-11', '2018-04-13', '2018-04-15', '2018-04-17', '2018-04-19'],
        disabledHours: Array.from(new Array(8), (x, i) => `0${i}`).concat(
          Array.from(new Array(23), (x, i) => {
            if (i + 1 > 18) {
              return `${i + 1}`
            } else {
              return null
            }
          })
        ),
        customShortcuts: [
          { key: 'thisWeek', label: 'This week', value: 'isoWeek' },
          { key: 'lastWeek', label: 'Last week', value: '-isoWeek' },
          { key: 'last7Days', label: 'Last 7 days', value: 7 },
          { key: 'last30Days', label: 'Last 30 days', value: 30 },
          { key: 'thisMonth', label: 'This month', value: 'month' },
          { key: 'lastMonth', label: 'Last month', value: '-month' },
          { key: 'thisYear', label: 'This year', value: 'year' },
          { key: 'lastYear', label: 'Last year', value: '-year' }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
  html, body, #app, #vueCtkDateTimePicker {
    margin: 0;
    min-height: 100%;
    min-width: 100%;
    font-size: 14px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &.dark {
      background-color: darken(#424242, 20%);
      header {
        color: rgba(255, 255, 255, 0.70);
      }
    }
  }
  header {
    text-align: center;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  img {
    height: 140px;
  }
  h3, h4, h1, p {
    margin: 0;
  }
  h3 {
    margin-bottom: 10px;
  }
  hr {
    border-top: 1px solid #ebebeb;
    border-bottom: 0;
    margin: 20px 0;
  }

  #undefined-picker-container-DatePicker {
      width: 230px;
  }
  .datepicker-container {
      width: 230px;
  }
  .calendar {
      width: 225px;
  }
  .datepicker-controls {
      width: 220px;
  }
  .week-days {
      width: 220px;
  }
  .month-container {
      width: 220px;
  }
  #undefined-input.field-input.no-clear-button {
    padding: 0 6px;
  }
  div.time-picker {
      width: 120px !important;
      max-width: 120px !important;
  }
  div.datepicker {
      width: 350px !important;
      min-width: 350px !important;
      max-width: 350px !important;
  }

</style>

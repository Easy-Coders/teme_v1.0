
// script to determine mobile platform//

  var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


    var theme='md';
    if( isMobile.iOS()) 
      theme='ios';    

    if( isMobile.Android()) 
      theme='md';

    var $ = Dom7;
    var app = new Framework7({
        root: '#app',
        theme:theme,
        panel: {
             swipe: true,
             visibleBreakpoint: 1024,
          }
     });


    var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
      },
      {
        values: ('am pm').split(' ')
      },
    ]
});



var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-dwstart',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
      },
      {
        values: ('am pm').split(' ')
      },
    ]
});


var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-dwend',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
      },
      {
        values: ('am pm').split(' ')
      },
    ]
});

var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-FertilityWindowReminderTime',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
      },
      {
        values: ('am pm').split(' ')
      },
    ]
});

var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-OvulationDayReminderTime',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
      },
      {
        values: ('am pm').split(' ')
      },
    ]
});

var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-PeriodInputReminderTime',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
      },
      {
        values: ('am pm').split(' ')
      },
    ]
});

var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-contraceptivepillremindertime',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
      },
      {
        values: ('am pm').split(' ')
      },
    ]
});

var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-contraceptivepillbreakdays',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ['Break days','Placebo pill days']
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99').split(' ')
      },
      {
        values: ('Days').split(' ')
      },
    ]
});

var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-contraceptivepillfirstpillforthiscycle',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec').split(' ')
      },
      {
        values: ('1980 1981 1982 1983 1984 1985 1986 1987 1988 1989 1990 1991 1992 1993 1994 1995 1996 1997 1998 1999 2000 2001 2002 2003 2004 2005 2006 2007 2008 2009 2010 2011 2012 2013 2014 2015 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025 2026 2027 2028 2029 2030 2031 2032 2033 2034 2035 2036 2037 2038 2039 2040 2041 2042 2043 2044 2045 2046 2047 2048 2049 2050 2051 2052 2053 2054 2055 2056 2057 2058 2059 2060 2061 2062 2063 2064 2065 2066 2067 2068 2069 2070 2071 2072 2073 2074 2075 2076 2077 2078 2079 2080 2081 2082 2083 2084 2085 2086 2087 2088 2089 2090 2091 2092 2093 2094 2095 2096 2097 2098 2099 2100').split(' ')
      },
    ]
});

//injection
var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-injectionremindertime',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
      },
      {
        values: ('AM PM').split(' ')
      },
    ]
});




var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-injectioninterval',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
		{
        values: ('Every').split(' ')
      },
      {
        textAlign: 'left',
        values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99').split(' ')
      },
	  {
        values: ('Week Month').split(' ')
      },
    ]
});

var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-injectionnextinjection',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec').split(' ')
      },
      {
        values: ('2020 2021 2022 2023 2024 2025 2026 2027 2028 2029 2030 2031 2032 2033 2034 2035 2036 2037 2038 2039 2040 2041 2042 2043 2044 2045 2046 2047 2048 2049 2050 2051 2052 2053 2054 2055 2056 2057 2058 2059 2060 2061 2062 2063 2064 2065 2066 2067 2068 2069 2070 2071 2072 2073 2074 2075 2076 2077 2078 2079 2080 2081 2082 2083 2084 2085 2086 2087 2088 2089 2090 2091 2092 2093 2094 2095 2096 2097 2098 2099 2100').split(' ')
      },
    ]
});

//vring
var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-VRingremindertime',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
      },
      {
        values: ('AM PM').split(' ')
      },
    ]
});

var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-VRinginsertdate',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec').split(' ')
      },
      {
        values: ('1980 1981 1982 1983 1984 1985 1986 1987 1988 1989 1990 1991 1992 1993 1994 1995 1996 1997 1998 1999 2000 2001 2002 2003 2004 2005 2006 2007 2008 2009 2010 2011 2012 2013 2014 2015 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025 2026 2027 2028 2029 2030 2031 2032 2033 2034 2035 2036 2037 2038 2039 2040 2041 2042 2043 2044 2045 2046 2047 2048 2049 2050 2051 2052 2053 2054 2055 2056 2057 2058 2059 2060 2061 2062 2063 2064 2065 2066 2067 2068 2069 2070 2071 2072 2073 2074 2075 2076 2077 2078 2079 2080 2081 2082 2083 2084 2085 2086 2087 2088 2089 2090 2091 2092 2093 2094 2095 2096 2097 2098 2099 2100').split(' ')
      },
    ]
});

var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-device',
  cols: [
    {
      textAlign: 'center',
      values: ['same day', '1 day before','2 day before','3 day before','4 day before','5 day before','6 day before','7 day before']
    }
  ]
});

var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-device-FertilityWindowreminder',
  cols: [
    {
      textAlign: 'center',
      values: ['same day', '1 day before','2 day before','3 day before','4 day before','5 day before','6 day before','7 day before', '8 day before','9 day before','10 day before','11 day before','12 day before','13 day before','14 day before']
    }
  ]
});

var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-device-OvulationDayReminder',
  cols: [
    {
      textAlign: 'center',
      values: ['same day', '1 day before','2 day before','3 day before','4 day before','5 day before','6 day before','7 day before', '8 day before','9 day before','10 day before','11 day before','12 day before','13 day before','14 day before']
    }
  ]
});

var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-device-PeriodInputReminder',
  cols: [
    {
      textAlign: 'center',
      values: ['same day', '1 day before','2 day before','3 day before','4 day before','5 day before','6 day before','7 day before', '8 day before','9 day before','10 day before','11 day before','12 day before','13 day before','14 day before']
    }
  ]
});

var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-device-interval',
  cols: [
    {
      textAlign: 'center',
      values: ['Every 0.5 hour','Every hour', 'Every 1.5 hour','Every 2 hour','Every 2.5 hour','Every 3 hour','Every 3.5 hour','Every 4 hour']
    }
  ]
});

var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-device-contraceptivepilltakepilldays',
  cols: [
    {
      textAlign: 'center',
      values: ['1 Day','2 Days', '3 Days','4 Days','5 Days','6 Days','7 Days','8 Days','9 Days', '10 Days', '11 Days', '12 Days', '13 Days', '14 Days', '15 Days', '16 Days', '17 Days', '18 Days', '19 Days', '20 Days', '21 Days', '22 Days', '23 Days', '24 Days', '25 Days', '26 Days', '27 Days', '28 Days', '29 Days', '30 Days', '31 Days', '32 Days', '33 Days', '34 Days', '35 Days','36 Days', '37 Days', '38 Days', '39 Days', '40 Days', '41 Days', '42 Days', '43 Days', '44 Days', '45 Days', '46 Days', '47 Days', '48 Days', '49 Days', '50 Days', '51 Days', '52 Days', '53 Days', '54 Days', '55 Days', '56 Days', '57 Days', '58 Days','59 Days', '60 Days', '61 Days', '62 Days', '63 Days', '64 Days', '65 Days', '66 Days', '67 Days', '68 Days', '69 Days', '70 Days', '71 Days', '72 Days', '73 Days', '74 Days', '75 Days', '76 Days', '77 Days', '78 Days', '79 Days', '80 Days', '81 Days','82 Days', '83 Days', '84 Days', '85 Days', '86 Days', '87 Days', '88 Days', '89 Days', '90 Days', '91 Days', '92 Days', '93 Days', '94 Days', '95 Days', '96 Days', '97 Days', '98 Days', '99 Days']
    }
  ]
});

//V-Ring
var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-device-VRingwearringdays',
  cols: [
    {
      textAlign: 'center',
      values: ['1 Day','2 Days', '3 Days','4 Days','5 Days','6 Days','7 Days','8 Days','9 Days', '10 Days', '11 Days', '12 Days', '13 Days', '14 Days', '15 Days', '16 Days', '17 Days', '18 Days', '19 Days', '20 Days', '21 Days', '22 Days', '23 Days', '24 Days', '25 Days', '26 Days', '27 Days', '28 Days', '29 Days', '30 Days', '31 Days', '32 Days', '33 Days', '34 Days', '35 Days', '36 Days', '37 Days', '38 Days', '39 Days', '40 Days', '41 Days', '42 Days', '43 Days', '44 Days', '45 Days', '46 Days', '47 Days', '48 Days', '49 Days', '50 Days', '51 Days', '52 Days', '53 Days', '54 Days', '55 Days', '56 Days', '57 Days', '58 Days', '59 Days', '60 Days', '61 Days', '62 Days', '63 Days', '64 Days', '65 Days', '66 Days', '67 Days', '68 Days', '69 Days', '70 Days', '71 Days', '72 Days', '73 Days', '74 Days', '75 Days', '76 Days', '77 Days', '78 Days', '79 Days', '80 Days', '81 Days', '82 Days', '83 Days', '84 Days', '85 Days', '86 Days', '87 Days', '88 Days', '89 Days', '90 Days', '91 Days', '92 Days', '93 Days', '94 Days', '95 Days', '96 Days', '97 Days', '98 Days', '99 Days','100 Days','101 Days','102 Days', '103 Days','104 Days','105 Days','106 Days','107 Days','108 Days','109 Days', '110 Days', '111 Days', '112 Days', '113 Days', '114 Days','115 Days','116 Days', '117 Days', '118 Days', '119 Days', '120 Days', '121 Days', '122 Days', '123 Days', '124 Days', '125 Days', '126 Days', '127 Days', '128 Days', '129 Days', '130 Days', '131 Days', '132 Days', '133 Days', '134 Days', '135 Days', '136 Days','137 Days', '138 Days', '139 Days', '140 Days', '141 Days', '142 Days', '143 Days', '144 Days', '145 Days', '146 Days', '147 Days', '148 Days', '149 Days', '150 Days', '151 Days', '152 Days', '153 Days', '154 Days', '155 Days', '156 Days', '157 Days','158 Days', '159 Days', '160 Days', '161 Days', '162 Days', '163 Days', '164 Days', '165 Days', '166 Days', '167 Days', '168 Days', '169 Days', '170 Days', '171 Days', '172 Days', '173 Days', '174 Days', '175 Days', '176 Days', '177 Days', '178 Days','179 Days', '180 Days', '181 Days', '182 Days', '183 Days', '184 Days', '185 Days', '186 Days', '187 Days', '188 Days', '189 Days', '190 Days', '191 Days', '192 Days', '193 Days', '194 Days', '195 Days', '196 Days', '197 Days', '198 Days', '199 Days','200 Days','201 Days','202 Days', '203 Days','204 Days','205 Days','206 Days','207 Days','208 Days','209 Days', '210 Days', '211 Days', '212 Days', '213 Days', '214 Days', '215 Days', '216 Days', '217 Days', '218 Days', '219 Days', '220 Days', '221 Days', '222 Days', '223 Days', '224 Days', '225 Days', '226 Days', '227 Days', '228 Days', '229 Days', '230 Days', '231 Days','232 Days', '233 Days', '234 Days', '235 Days', '236 Days', '237 Days', '238 Days', '239 Days', '240 Days', '241 Days', '242 Days', '243 Days', '244 Days', '245 Days', '246 Days', '247 Days', '248 Days', '249 Days', '250 Days', '251 Days', '252 Days','253 Days', '254 Days', '255 Days', '256 Days', '257 Days', '258 Days', '259 Days', '260 Days', '261 Days', '262 Days', '263 Days', '264 Days', '265 Days', '266 Days', '267 Days', '268 Days', '269 Days', '270 Days', '271 Days', '272 Days', '273 Days','274 Days', '275 Days', '276 Days', '277 Days', '278 Days', '279 Days', '280 Days', '281 Days', '282 Days', '283 Days', '284 Days', '285 Days', '286 Days', '287 Days', '288 Days', '289 Days', '290 Days', '291 Days', '292 Days', '293 Days', '294 Days','295 Days', '296 Days', '297 Days', '298 Days', '299 Days','300 Days','301 Days','302 Days', '303 Days','304 Days','305 Days','306 Days','307 Days','308 Days','309 Days', '310 Days', '311 Days', '312 Days', '313 Days', '314 Days', '315 Days', '316 Days', '317 Days', '318 Days', '319 Days', '320 Days', '321 Days', '322 Days', '323 Days', '324 Days', '325 Days', '326 Days', '327 Days', '328 Days', '329 Days', '330 Days', '331 Days', '332 Days', '333 Days', '334 Days', '335 Days','336 Days', '337 Days', '338 Days', '339 Days', '340 Days', '341 Days', '342 Days', '343 Days', '344 Days', '345 Days', '346 Days', '347 Days', '348 Days', '349 Days', '350 Days', '351 Days', '352 Days', '353 Days', '354 Days', '355 Days', '356 Days', '357 Days', '358 Days','359 Days', '360 Days', '361 Days', '362 Days', '363 Days', '364 Days', '365 Days']
    }
  ]
});

var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-device-VRingbreakdays',
  cols: [
    {
      textAlign: 'center',
      values: ['1 Day','2 Days', '3 Days','4 Days','5 Days','6 Days','7 Days','8 Days','9 Days', '10 Days', '11 Days', '12 Days', '13 Days', '14 Days', '15 Days', '16 Days', '17 Days', '18 Days', '19 Days', '20 Days', '21 Days', '22 Days', '23 Days', '24 Days', '25 Days', '26 Days', '27 Days', '28 Days', '29 Days', '30 Days', '31 Days', '32 Days', '33 Days', '34 Days', '35 Days', '36 Days', '37 Days', '38 Days', '39 Days', '40 Days', '41 Days', '42 Days', '43 Days', '44 Days', '45 Days', '46 Days', '47 Days', '48 Days', '49 Days', '50 Days', '51 Days', '52 Days', '53 Days', '54 Days', '55 Days', '56 Days', '57 Days', '58 Days', '59 Days', '60 Days', '61 Days', '62 Days', '63 Days', '64 Days', '65 Days', '66 Days', '67 Days', '68 Days', '69 Days', '70 Days', '71 Days', '72 Days', '73 Days', '74 Days', '75 Days', '76 Days', '77 Days', '78 Days', '79 Days', '80 Days', '81 Days', '82 Days', '83 Days', '84 Days', '85 Days', '86 Days', '87 Days', '88 Days', '89 Days', '90 Days', '91 Days', '92 Days', '93 Days', '94 Days', '95 Days', '96 Days', '97 Days', '98 Days', '99 Days','100 Days','101 Days','102 Days', '103 Days','104 Days','105 Days','106 Days','107 Days','108 Days','109 Days', '110 Days', '111 Days', '112 Days', '113 Days', '114 Days','115 Days','116 Days', '117 Days', '118 Days', '119 Days', '120 Days', '121 Days', '122 Days', '123 Days', '124 Days', '125 Days', '126 Days', '127 Days', '128 Days', '129 Days', '130 Days', '131 Days', '132 Days', '133 Days', '134 Days', '135 Days', '136 Days','137 Days', '138 Days', '139 Days', '140 Days', '141 Days', '142 Days', '143 Days', '144 Days', '145 Days', '146 Days', '147 Days', '148 Days', '149 Days', '150 Days', '151 Days', '152 Days', '153 Days', '154 Days', '155 Days', '156 Days', '157 Days','158 Days', '159 Days', '160 Days', '161 Days', '162 Days', '163 Days', '164 Days', '165 Days', '166 Days', '167 Days', '168 Days', '169 Days', '170 Days', '171 Days', '172 Days', '173 Days', '174 Days', '175 Days', '176 Days', '177 Days', '178 Days','179 Days', '180 Days', '181 Days', '182 Days', '183 Days', '184 Days', '185 Days', '186 Days', '187 Days', '188 Days', '189 Days', '190 Days', '191 Days', '192 Days', '193 Days', '194 Days', '195 Days', '196 Days', '197 Days', '198 Days', '199 Days','200 Days','201 Days','202 Days', '203 Days','204 Days','205 Days','206 Days','207 Days','208 Days','209 Days', '210 Days', '211 Days', '212 Days', '213 Days', '214 Days', '215 Days', '216 Days', '217 Days', '218 Days', '219 Days', '220 Days', '221 Days', '222 Days', '223 Days', '224 Days', '225 Days', '226 Days', '227 Days', '228 Days', '229 Days', '230 Days', '231 Days','232 Days', '233 Days', '234 Days', '235 Days', '236 Days', '237 Days', '238 Days', '239 Days', '240 Days', '241 Days', '242 Days', '243 Days', '244 Days', '245 Days', '246 Days', '247 Days', '248 Days', '249 Days', '250 Days', '251 Days', '252 Days','253 Days', '254 Days', '255 Days', '256 Days', '257 Days', '258 Days', '259 Days', '260 Days', '261 Days', '262 Days', '263 Days', '264 Days', '265 Days', '266 Days', '267 Days', '268 Days', '269 Days', '270 Days', '271 Days', '272 Days', '273 Days','274 Days', '275 Days', '276 Days', '277 Days', '278 Days', '279 Days', '280 Days', '281 Days', '282 Days', '283 Days', '284 Days', '285 Days', '286 Days', '287 Days', '288 Days', '289 Days', '290 Days', '291 Days', '292 Days', '293 Days', '294 Days','295 Days', '296 Days', '297 Days', '298 Days', '299 Days','300 Days','301 Days','302 Days', '303 Days','304 Days','305 Days','306 Days','307 Days','308 Days','309 Days', '310 Days', '311 Days', '312 Days', '313 Days', '314 Days', '315 Days', '316 Days', '317 Days', '318 Days', '319 Days', '320 Days', '321 Days', '322 Days', '323 Days', '324 Days', '325 Days', '326 Days', '327 Days', '328 Days', '329 Days', '330 Days', '331 Days', '332 Days', '333 Days', '334 Days', '335 Days','336 Days', '337 Days', '338 Days', '339 Days', '340 Days', '341 Days', '342 Days', '343 Days', '344 Days', '345 Days', '346 Days', '347 Days', '348 Days', '349 Days', '350 Days', '351 Days', '352 Days', '353 Days', '354 Days', '355 Days', '356 Days', '357 Days', '358 Days','359 Days', '360 Days', '361 Days', '362 Days', '363 Days', '364 Days', '365 Days']
    }
  ]
});

//patch
var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-patchremindertime',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
      },
      {
        values: ('AM PM').split(' ')
      },
    ]
});

var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-device-patchbreakdays',
  cols: [
    {
      textAlign: 'center',
      values: ['1 Day','2 Days', '3 Days','4 Days','5 Days','6 Days','7 Days','8 Days','9 Days', '10 Days', '11 Days', '12 Days', '13 Days', '14 Days', '15 Days', '16 Days', '17 Days', '18 Days', '19 Days', '20 Days', '21 Days', '22 Days', '23 Days', '24 Days', '25 Days', '26 Days', '27 Days', '28 Days', '29 Days', '30 Days', '31 Days', '32 Days', '33 Days', '34 Days', '35 Days', '36 Days', '37 Days', '38 Days', '39 Days', '40 Days', '41 Days', '42 Days', '43 Days', '44 Days', '45 Days', '46 Days', '47 Days', '48 Days', '49 Days', '50 Days', '51 Days', '52 Days', '53 Days', '54 Days', '55 Days', '56 Days', '57 Days', '58 Days', '59 Days', '60 Days', '61 Days', '62 Days', '63 Days', '64 Days', '65 Days', '66 Days', '67 Days', '68 Days', '69 Days', '70 Days', '71 Days', '72 Days', '73 Days', '74 Days', '75 Days', '76 Days', '77 Days', '78 Days', '79 Days', '80 Days', '81 Days', '82 Days', '83 Days', '84 Days', '85 Days', '86 Days', '87 Days', '88 Days', '89 Days', '90 Days', '91 Days', '92 Days', '93 Days', '94 Days', '95 Days', '96 Days', '97 Days', '98 Days', '99 Days']
    }
  ]
});

var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-patchfirstpatchforthiscycle',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec').split(' ')
      },
      {
        values: ('1980 1981 1982 1983 1984 1985 1986 1987 1988 1989 1990 1991 1992 1993 1994 1995 1996 1997 1998 1999 2000 2001 2002 2003 2004 2005 2006 2007 2008 2009 2010 2011 2012 2013 2014 2015 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025 2026 2027 2028 2029 2030 2031 2032 2033 2034 2035 2036 2037 2038 2039 2040 2041 2042 2043 2044 2045 2046 2047 2048 2049 2050 2051 2052 2053 2054 2055 2056 2057 2058 2059 2060 2061 2062 2063 2064 2065 2066 2067 2068 2069 2070 2071 2072 2073 2074 2075 2076 2077 2078 2079 2080 2081 2082 2083 2084 2085 2086 2087 2088 2089 2090 2091 2092 2093 2094 2095 2096 2097 2098 2099 2100').split(' ')
      },
    ]
});

//IUD
var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-IUDremindertime',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
      },
      {
        values: ('AM PM').split(' ')
      },
    ]
});

var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-device-IUDeffectivetime',
  cols: [
    {
      textAlign: 'center',
      values: ['1 Year','2 Years', '3 Years','4 Years','5 Years','6 Years','7 Years','8 Years','9 Years','10 Years']
    }
  ]
});

var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-IUDcheckstring',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
		{
        values: ('Every').split(' ')
      },
      {
        textAlign: 'left',
        values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99').split(' ')
      },
	  {
        values: ('Week Month').split(' ')
      },
    ]
});

var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-IUDinsertdate',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec').split(' ')
      },
      {
        values: ('1980 1981 1982 1983 1984 1985 1986 1987 1988 1989 1990 1991 1992 1993 1994 1995 1996 1997 1998 1999 2000 2001 2002 2003 2004 2005 2006 2007 2008 2009 2010 2011 2012 2013 2014 2015 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025 2026 2027 2028 2029 2030 2031 2032 2033 2034 2035 2036 2037 2038 2039 2040 2041 2042 2043 2044 2045 2046 2047 2048 2049 2050 2051 2052 2053 2054 2055 2056 2057 2058 2059 2060 2061 2062 2063 2064 2065 2066 2067 2068 2069 2070 2071 2072 2073 2074 2075 2076 2077 2078 2079 2080 2081 2082 2083 2084 2085 2086 2087 2088 2089 2090 2091 2092 2093 2094 2095 2096 2097 2098 2099 2100').split(' ')
      },
    ]
});

//Implant
var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-Implantremindertime',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
      },
      {
        values: ('AM PM').split(' ')
      },
    ]
});

var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-device-Implanteffectivetime',
  cols: [
    {
      textAlign: 'center',
      values: ['1 Year','2 Years', '3 Years','4 Years','5 Years','6 Years','7 Years','8 Years','9 Years','10 Years']
    }
  ]
});

var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-Implantinsertdate',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec').split(' ')
      },
      {
        values: ('1980 1981 1982 1983 1984 1985 1986 1987 1988 1989 1990 1991 1992 1993 1994 1995 1996 1997 1998 1999 2000 2001 2002 2003 2004 2005 2006 2007 2008 2009 2010 2011 2012 2013 2014 2015 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025 2026 2027 2028 2029 2030 2031 2032 2033 2034 2035 2036 2037 2038 2039 2040 2041 2042 2043 2044 2045 2046 2047 2048 2049 2050 2051 2052 2053 2054 2055 2056 2057 2058 2059 2060 2061 2062 2063 2064 2065 2066 2067 2068 2069 2070 2071 2072 2073 2074 2075 2076 2077 2078 2079 2080 2081 2082 2083 2084 2085 2086 2087 2088 2089 2090 2091 2092 2093 2094 2095 2096 2097 2098 2099 2100').split(' ')
      },
    ]
});

//preg
var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-pregeststartofgest',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec').split(' ')
      },
      {
        values: ('1980 1981 1982 1983 1984 1985 1986 1987 1988 1989 1990 1991 1992 1993 1994 1995 1996 1997 1998 1999 2000 2001 2002 2003 2004 2005 2006 2007 2008 2009 2010 2011 2012 2013 2014 2015 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025 2026 2027 2028 2029 2030 2031 2032 2033 2034 2035 2036 2037 2038 2039 2040 2041 2042 2043 2044 2045 2046 2047 2048 2049 2050 2051 2052 2053 2054 2055 2056 2057 2058 2059 2060 2061 2062 2063 2064 2065 2066 2067 2068 2069 2070 2071 2072 2073 2074 2075 2076 2077 2078 2079 2080 2081 2082 2083 2084 2085 2086 2087 2088 2089 2090 2091 2092 2093 2094 2095 2096 2097 2098 2099 2100').split(' ')
      },
    ]
});



//function to show water added

/* function drinkWater(){
          //  alert("hii");
            var consumed=$('#consumed').val();
            var waterValue=$('#waterValue').val();
            var glassValue=$('#glassValue').val();
           // alert(consumed);
            var finalValue=parseInt(waterValue)+parseInt(glassValue);
            $('#waterValue').val(finalValue);
            var waterValue=$('#waterValue').val();
            var factorPercentage=2100/100;
            var percentage=Math.round((waterValue/2100)*100);
            var finalValue=percentage*factorPercentage;
            var bar1 = new ldBar("#bubble");
            var bar2 = document.getElementById('bubble').ldBar;
            bar1.set(percentage);


            
        }*/

//toggle check nevigation
function check(value,id){
  
  var check=$('#'+id).is(':checked');
  
   if(check==true){
	var link = $('#'+value);
	link.click();
   }

}	

//userdata calender
var calendarModal = app.calendar.create({
  inputEl: '#demo-calendar-modal',
  openIn: 'customModal',
  header: true,
  footer: true,
});

//
var calendarMultiple = app.calendar.create({
  inputEl: '#demo-calendar-multiple',
  dateFormat: { month: 'short', day: 'numeric' },
  multiple: true,
  header: true,
  footer: true,
});


///
var calendarMultiple = app.calendar.create({
  inputEl: '#demo-calendar-multiple1',
  dateFormat: { month: 'short', day: 'numeric' },
  multiple: true,
  header: true,
  footer: true,
});

//Edit period(add note)
var $$ = Dom7;
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];
var calendarInline = app.calendar.create({
  containerEl: '#demo-calendar-inline-container',
  value: [new Date()],
  weekHeader: true,
  footer: true,
  
  renderToolbar: function () {
    return '<div class="toolbar calendar-custom-toolbar no-shadow">' +
      '<div class="toolbar-inner">' +
        '<div class="left">' +
          '<a href="#" class="link icon-only"><i class="icon icon-back ' + (app.theme === 'md' ? 'color-black' : '') + '"></i></a>' +
        '</div>' +
        '<div class="center"></div>' +
        '<div class="right">' +
          '<a href="#" class="link icon-only"><i class="icon icon-forward ' + (app.theme === 'md' ? 'color-black' : '') + '"></i></a>' +
        '</div>' +
      '</div>' +
    '</div>';
  },
  on: {
    init: function (c) {
      $$('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] +', ' + c.currentYear);
      $$('.calendar-custom-toolbar .left .link').on('click', function () {
        calendarInline.prevMonth();
      });
      $$('.calendar-custom-toolbar .right .link').on('click', function () {
        calendarInline.nextMonth();
      });
    },
    monthYearChangeStart: function (c) {
      $$('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] +', ' + c.currentYear);
    }
  }
});


//weight
var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-weight',
    rotateEffect: true,
    cols: [
      {
        textAlign: 'left',
        values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100').split(' ')
      },
      {
        values: ('kg lbs').split(' ')
      },
    ]
});


//wakeup time
var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-wakeuptime',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
      },
      {
        values: ('AM PM').split(' ')
      },
    ]
});


//bedtime
var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-bedtime',
    rotateEffect: true,
    formatValue: function (values, displayValues) {
    return displayValues[0] + ': ' + values[1]+' '+values[2];
  },
  
    cols: [
      {
        textAlign: 'left',
        values: ('01 02 03 04 05 06 07 08 9 10 11 12').split(' ')
      },
       {
      divider: true,
      content: ':'
    },
      {
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
      },
      {
        values: ('AM PM').split(' ')
      },
    ]
});


//add note weight
var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-addnoteweight',
    rotateEffect: true,
	formatValue: function (values, displayValues) {
    return displayValues[0] + '. ' + values[1]+' '+values[2];
	},
    cols: [
      {
        textAlign: 'left',
        values: ('40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99').split(' ')
      },{
      divider: true,
      content: '.'
    },
	{
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99').split(' ')
      },
      {
        values: ('kg lb').split(' ')
      },
    ]
});

//add note temperature
var pickerDescribe = app.picker.create({
  inputEl: '#demo-picker-describe-addnotetemperature',
    rotateEffect: true,
	formatValue: function (values, displayValues) {
    return displayValues[0] + '. ' + values[1]+' '+values[2];
	},
    cols: [
      {
        textAlign: 'left',
        values: ('86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122').split(' ')
      },{
      divider: true,
      content: '.'
    },
	{
        values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99').split(' ')
      },
      {
        values: ('&#8451; &#8457;').split(' ')
      },
    ]
});


//more period length


var pickerDevice = app.picker.create({
  inputEl: '#waterSelector',
  cols: [
    {
      textAlign: 'center',
      values: ['0 ML', '', '100 ML', '150 ML', '200 ML', '250 ML', '300 ML', '400 ML', '500 ML', '600 ML', '800 ML', '1000 ML']
    }
  ]
});



//reminder popup
$('.open-vertical').on('click', function () {
  app.dialog.create({
    title: 'Choose your method',

    buttons: [
      {
        text: '<a class="button popup-open" style="float:left;" href="#" data-popup=".popup-ContraceptivePill"><i class="fa fa-minus-circle"></i> &nbsp;Conctraceptive pill</a>',
      },
      {
        text: '<a class="button popup-open" style="float:left;" href="#" data-popup=".popup-Injection"><i class="fa fa-syringe"></i> &nbsp;Injection</a>',
      },
      {
        text: '<a class="button popup-open" style="float:left;" href="#" data-popup=".popup-VRing"><i class="fa fa-dot-circle"></i> &nbsp;V-Ring</a>',
      },
       {
        text: '<a class="button popup-open" style="float:left;" href="#" data-popup=".popup-Patch"><i class="fa fa-file"></i> &nbsp;Patch</a>',
      },
      {
        text: '<a class="button popup-open" style="float:left;" href="#" data-popup=".popup-IUD"><i class="fa fa-plus-square"></i> &nbsp;IUD</a>',
      },
      {
        text: '<a class="button popup-open" style="float:left;" href="#" data-popup=".popup-Implant"><i class="fa fa-plus-circle"></i> &nbsp;Implant</a>',
      },
    ],
    verticalButtons: true,
    cssClass: 'appdialog'
  }).open();
});






      
     $('.hide-navbar').on('click', function () {
      app.panel.close('.panel-left');
     });

     $('.panel-left').on('panel:open', function () {
           console.log('Panel left: open');
     });
     $('.panel-left').on('panel:opened', function () {
           console.log('Panel left: opened');
		   
	 });
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Generated by LiveScript 1.3.1
var presets, simpleStr, wrap, slice$ = [].slice, toString$ = {}.toString;
presets = require('./presets').presets;
simpleStr = function(arr){
  return arr.join('');
};
wrap = function(content){
  return "data:image/svg+xml;base64," + btoa(content);
};
(function(){
  var make, handler, ldBar;
  make = {
    head: function(viewBox){
      return "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"" + viewBox + "\">";
    },
    gradient: function(dir, dur){
      var colors, ret, len, gx, gy, x, y, i$, i, idx;
      dir == null && (dir = 45);
      dur == null && (dur = 1);
      colors = slice$.call(arguments, 2);
      ret = [this.head("0 0 100 100")];
      len = colors.length * 4 + 1;
      dir = dir * Math.PI / 180;
      gx = Math.pow(Math.cos(dir), 2);
      gy = Math.sqrt(gx - Math.pow(gx, 2));
      if (dir > Math.PI * 0.25) {
        gy = Math.pow(Math.sin(dir), 2);
        gx = Math.sqrt(gy - Math.pow(gy, 2));
      }
      x = gx * 100;
      y = gy * 100;
      ret.push("<defs><linearGradient id=\"gradient\" x1=\"0\" x2=\"" + gx + "\" y1=\"0\" y2=\"" + gy + "\">");
      for (i$ = 0; i$ < len; ++i$) {
        i = i$;
        idx = i * 100 / (len - 1);
        ret.push("<stop offset=\"" + idx + "%\" stop-color=\"" + colors[i % colors.length] + "\"/>");
      }
      ret.push("</linearGradient></defs>\n<rect x=\"0\" y=\"0\" width=\"400\" height=\"400\" fill=\"url(#gradient)\">\n<animateTransform attributeName=\"transform\" type=\"translate\" from=\"-" + x + ",-" + y + "\"\nto=\"0,0\" dur=\"" + dur + "s\" repeatCount=\"indefinite\"/></rect></svg>");
      return wrap(ret.join(""));
    },
    stripe: function(c1, c2, dur){
      var ret, i;
      c1 == null && (c1 = '#b4b4b4');
      c2 == null && (c2 = '#e6e6e6');
      dur == null && (dur = 1);
      ret = [this.head("0 0 100 100")];
      ret = ret.concat([
        "<rect fill=\"" + c2 + "\" width=\"100\" height=\"100\"/>", "<g><g>", (function(){
          var i$, results$ = [];
          for (i$ = 0; i$ < 13; ++i$) {
            i = i$;
            results$.push(("<polygon fill=\"" + c1 + "\" ") + ("points=\"" + (-90 + i * 20) + ",100 " + (-100 + i * 20) + ",") + ("100 " + (-60 + i * 20) + ",0 " + (-50 + i * 20) + ",0 \"/>"));
          }
          return results$;
        }()).join(""), "</g><animateTransform attributeName=\"transform\" type=\"translate\" ", "from=\"0,0\" to=\"20,0\" dur=\"" + dur + "s\" repeatCount=\"indefinite\"/></g></svg>"
      ].join(""));
      return wrap(ret);
    },
    bubble: function(c1, c2, count, dur, size, sw){
      var ret, i$, i, idx, x, r, d;
      c1 == null && (c1 = '#39d');
      c2 == null && (c2 = '#9cf');
      count == null && (count = 15);
      dur == null && (dur = 1);
      size == null && (size = 6);
      sw == null && (sw = 1);
      ret = [this.head("0 0 200 200"), "<rect x=\"0\" y=\"0\" width=\"200\" height=\"200\" fill=\"" + c1 + "\"/>"];
      for (i$ = 0; i$ < count; ++i$) {
        i = i$;
        idx = -(i / count) * dur;
        x = Math.random() * 184 + 8;
        r = (Math.random() * 0.7 + 0.3) * size;
        d = dur * (1 + Math.random() * 0.5);
        ret.push(["<circle cx=\"" + x + "\" cy=\"0\" r=\"" + r + "\" fill=\"none\" stroke=\"" + c2 + "\" stroke-width=\"" + sw + "\">", "<animate attributeName=\"cy\" values=\"190;-10\" times=\"0;1\" ", "dur=\"" + d + "s\" begin=\"" + idx + "s\" repeatCount=\"indefinite\"/>", "</circle>", "<circle cx=\"" + x + "\" cy=\"0\" r=\"" + r + "\" fill=\"none\" stroke=\"" + c2 + "\" stroke-width=\"" + sw + "\">", "<animate attributeName=\"cy\" values=\"390;190\" times=\"0;1\" ", "dur=\"" + d + "s\" begin=\"" + idx + "s\" repeatCount=\"indefinite\"/>", "</circle>"].join(""));
      }
      return wrap(ret.join("") + "</svg>");
    }
  };
  handler = {
    queue: {},
    running: false,
    main: function(timestamp){
      var keepon, removed, k, ref$, func, ret, this$ = this;
      keepon = false;
      removed = [];
      for (k in ref$ = this.queue) {
        func = ref$[k];
        ret = func(timestamp);
        if (!ret) {
          removed.push(func);
        }
        keepon = keepon || ret;
      }
      for (k in ref$ = this.queue) {
        func = ref$[k];
        if (removed.indexOf(func) >= 0) {
          delete this.queue[k];
        }
      }
      if (keepon) {
        return requestAnimationFrame(function(it){
          return this$.main(it);
        });
      } else {
        return this.running = false;
      }
    },
    add: function(key, f){
      var this$ = this;
      if (!this.queue[key]) {
        this.queue[key] = f;
      }
      if (!this.running) {
        this.running = true;
        return requestAnimationFrame(function(it){
          return this$.main(it);
        });
      }
    }
  };
  window.ldBar = ldBar = function(selector, option){
    var xmlns, root, cls, idPrefix, id, domTree, newNode, x$, config, attr, that, isStroke, parseRes, dom, svg, text, group, length, path0, path1, patimg, img, ret, size, this$ = this;
    option == null && (option = {});
    xmlns = {
      xlink: "http://www.w3.org/1999/xlink"
    };
    root = toString$.call(selector).slice(8, -1) === 'String' ? document.querySelector(selector) : selector;
    if (!root.ldBar) {
      root.ldBar = this;
    } else {
      return root.ldBar;
    }
    cls = root.getAttribute('class') || '';
    if (!~cls.indexOf('ldBar')) {
      root.setAttribute('class', cls + " ldBar");
    }
    idPrefix = "ldBar-" + Math.random().toString(16).substring(2);
    id = {
      key: idPrefix,
      clip: idPrefix + "-clip",
      filter: idPrefix + "-filter",
      pattern: idPrefix + "-pattern",
      mask: idPrefix + "-mask",
      maskPath: idPrefix + "-mask-path"
    };
    domTree = function(n, o){
      var k, v;
      n = newNode(n);
      for (k in o) {
        v = o[k];
        if (k !== 'attr') {
          n.appendChild(domTree(k, v || {}));
        }
      }
      n.attrs(o.attr || {});
      return n;
    };
    newNode = function(n){
      return document.createElementNS("http://www.w3.org/2000/svg", n);
    };
    x$ = document.body.__proto__.__proto__.__proto__;
    x$.text = function(t){
      return this.appendChild(document.createTextNode(t));
    };
    x$.attrs = function(o){
      var k, v, ret, results$ = [];
      for (k in o) {
        v = o[k];
        ret = /([^:]+):([^:]+)/.exec(k);
        if (!ret || !xmlns[ret[1]]) {
          results$.push(this.setAttribute(k, v));
        } else {
          results$.push(this.setAttributeNS(xmlns[ret[1]], k, v));
        }
      }
      return results$;
    };
    x$.styles = function(o){
      var k, v, results$ = [];
      for (k in o) {
        v = o[k];
        results$.push(this.style[k] = v);
      }
      return results$;
    };
    x$.append = function(n){
      var r;
      return this.appendChild(r = document.createElementNS("http://www.w3.og/2000/svg", n));
    };
    x$.attr = function(n, v){
      if (v != null) {
        return this.setAttribute(n, v);
      } else {
        return this.getAttribute(n);
      }
    };
    config = {
      "type": 'stroke',
      "img": '',
      "path": 'M10 10L90 10M90 8M90 12',
      "fill-dir": 'btt',
      "fill": '#25b',
      "fill-background": '#ddd',
      "fill-background-extrude": 3,
      "pattern-size": null,
      "stroke-dir": 'normal',
      "stroke": '#25b',
      "stroke-width": '3',
      "stroke-trail": '#ddd',
      "stroke-trail-width": 0.5,
      "duration": 1,
      "easing": 'linear',
      "value": 0,
      "img-size": null,
      "bbox": null,
      "set-dim": true,
      "aspect-ratio": "xMidYMid",
      "transition-in": false,
      "min": 0,
      "max": 100,
      "precision": 0,
      "padding": undefined
    };
    config["preset"] = root.attr("data-preset") || option["preset"];
    if (config.preset != null) {
      import$(config, presets[config.preset]);
    }
    for (attr in config) {
      if (that = that = root.attr("data-" + attr)) {
        config[attr] = that;
      }
    }
    import$(config, option);
    if (config.img) {
      config.path = null;
    }
    isStroke = config.type === 'stroke';
    parseRes = function(v){
      var parser, ret;
      parser = /data:ldbar\/res,([^()]+)\(([^)]+)\)/;
      ret = parser.exec(v);
      if (!ret) {
        return v;
      }
      return ret = make[ret[1]].apply(make, ret[2].split(','));
    };
    config.fill = parseRes(config.fill);
    config.stroke = parseRes(config.stroke);
    if (config["set-dim"] === 'false') {
      config["set-dim"] = false;
    }
    dom = {
      attr: {
        "xmlns:xlink": 'http://www.w3.org/1999/xlink',
        preserveAspectRatio: config["aspect-ratio"],
        width: "100%",
        height: "100%"
      },
      defs: {
        filter: {
          attr: {
            id: id.filter,
            x: -1,
            y: -1,
            width: 3,
            height: 3
          },
          feMorphology: {
            attr: {
              operator: +config["fill-background-extrude"] >= 0 ? 'dilate' : 'erode',
              radius: Math.abs(+config["fill-background-extrude"])
            }
          },
          feColorMatrix: {
            attr: {
              values: '0 0 0 0 1    0 0 0 0 1    0 0 0 0 1    0 0 0 1 0',
              result: "cm"
            }
          }
        },
        mask: {
          attr: {
            id: id.mask
          },
          image: {
            attr: {
              "xlink:href": config.img,
              filter: "url(#" + id.filter + ")",
              x: 0,
              y: 0,
              width: 100,
              height: 100,
              preserveAspectRatio: config["aspect-ratio"]
            }
          }
        },
        g: {
          mask: {
            attr: {
              id: id.maskPath
            },
            path: {
              attr: {
                d: config.path || "",
                fill: '#fff',
                stroke: '#fff',
                filter: "url(#" + id.filter + ")"
              }
            }
          }
        },
        clipPath: {
          attr: {
            id: id.clip
          },
          rect: {
            attr: {
              'class': 'mask',
              fill: '#000'
            }
          }
        },
        pattern: {
          attr: {
            id: id.pattern,
            patternUnits: 'userSpaceOnUse',
            x: 0,
            y: 0,
            width: 300,
            height: 300
          },
          image: {
            attr: {
              x: 0,
              y: 0,
              width: 300,
              height: 300
            }
          }
        }
      }
    };
    svg = domTree('svg', dom);
    text = document.createElement('div');
    text.setAttribute('class', 'ldBar-label');
    root.appendChild(svg);
    root.appendChild(text);
    group = [0, 0];
    length = 0;
    this.fit = function(){
      var that, box, d, rect;
      if (that = config["bbox"]) {
        box = that.split(' ').map(function(it){
          return +it.trim();
        });
        box = {
          x: box[0],
          y: box[1],
          width: box[2],
          height: box[3]
        };
      } else {
        box = group[1].getBBox();
      }
      if (!box || box.width === 0 || box.height === 0) {
        box = {
          x: 0,
          y: 0,
          width: 100,
          height: 100
        };
      }
      d = Math.max.apply(null, ['stroke-width', 'stroke-trail-width', 'fill-background-extrude'].map(function(it){
        return config[it];
      })) * 1.5;
      if (config["padding"] != null) {
        d = +config["padding"];
      }
      svg.attrs({
        viewBox: [box.x - d, box.y - d, box.width + d * 2, box.height + d * 2].join(" ")
      });
      if (config["set-dim"]) {
        ['width', 'height'].map(function(it){
          if (!root.style[it] || this$.fit[it]) {
            root.style[it] = (box[it] + d * 2) + "px";
            return this$.fit[it] = true;
          }
        });
      }
      rect = group[0].querySelector('rect');
      if (rect) {
        return rect.attrs({
          x: box.x - d,
          y: box.y - d,
          width: box.width + d * 2,
          height: box.height + d * 2
        });
      }
    };
    if (config.path) {
      if (isStroke) {
        group[0] = domTree('g', {
          path: {
            attr: {
              d: config.path,
              fill: 'none',
              'class': 'baseline'
            }
          }
        });
      } else {
        group[0] = domTree('g', {
          rect: {
            attr: {
              x: 0,
              y: 0,
              width: 100,
              height: 100,
              mask: "url(#" + id.maskPath + ")",
              fill: config["fill-background"],
              'class': 'frame'
            }
          }
        });
      }
      svg.appendChild(group[0]);
      group[1] = domTree('g', {
        path: {
          attr: {
            d: config.path,
            'class': isStroke ? 'mainline' : 'solid',
            "clip-path": config.type === 'fill' ? "url(#" + id.clip + ")" : ''
          }
        }
      });
      svg.appendChild(group[1]);
      path0 = group[0].querySelector(isStroke ? 'path' : 'rect');
      path1 = group[1].querySelector('path');
      if (isStroke) {
        path1.attrs({
          fill: 'none'
        });
      }
      patimg = svg.querySelector('pattern image');
      img = new Image();
      img.addEventListener('load', function(){
        var box, that;
        box = (that = config["pattern-size"])
          ? {
            width: +that,
            height: +that
          }
          : img.width && img.height
            ? {
              width: img.width,
              height: img.height
            }
            : {
              width: 300,
              height: 300
            };
        svg.querySelector('pattern').attrs({
          width: box.width,
          height: box.height
        });
        return patimg.attrs({
          width: box.width,
          height: box.height
        });
      });
      if (/.+\..+|^data:/.exec(!isStroke
        ? config.fill
        : config.stroke)) {
        img.src = !isStroke
          ? config.fill
          : config.stroke;
        patimg.attrs({
          "xlink:href": img.src
        });
      }
      if (isStroke) {
        path0.attrs({
          stroke: config["stroke-trail"],
          "stroke-width": config["stroke-trail-width"]
        });
        path1.attrs({
          "stroke-width": config["stroke-width"],
          stroke: /.+\..+|^data:/.exec(config.stroke)
            ? "url(#" + id.pattern + ")"
            : config.stroke
        });
      }
      if (config.fill && !isStroke) {
        path1.attrs({
          fill: /.+\..+|^data:/.exec(config.fill)
            ? "url(#" + id.pattern + ")"
            : config.fill
        });
      }
      length = path1.getTotalLength();
      this.fit();
      this.inited = true;
    } else if (config.img) {
      if (config["img-size"]) {
        ret = config["img-size"].split(',');
        size = {
          width: +ret[0],
          height: +ret[1]
        };
      } else {
        size = {
          width: 100,
          height: 100
        };
      }
      group[0] = domTree('g', {
        rect: {
          attr: {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            mask: "url(#" + id.mask + ")",
            fill: config["fill-background"]
          }
        }
      });
      svg.querySelector('mask image').attrs({
        width: size.width,
        height: size.height
      });
      group[1] = domTree('g', {
        image: {
          attr: {
            width: size.width,
            height: size.height,
            x: 0,
            y: 0,
            preserveAspectRatio: config["aspect-ratio"],
            "clip-path": config.type === 'fill' ? "url(#" + id.clip + ")" : '',
            "xlink:href": config.img,
            'class': 'solid'
          }
        }
      });
      img = new Image();
      img.addEventListener('load', function(){
        var ret, size, v;
        if (config["img-size"]) {
          ret = config["img-size"].split(',');
          size = {
            width: +ret[0],
            height: +ret[1]
          };
        } else if (img.width && img.height) {
          size = {
            width: img.width,
            height: img.height
          };
        } else {
          size = {
            width: 100,
            height: 100
          };
        }
        svg.querySelector('mask image').attrs({
          width: size.width,
          height: size.height
        });
        group[1].querySelector('image').attrs({
          width: size.width,
          height: size.height
        });
        this$.fit();
        v = this$.value;
        this$.value = undefined;
        this$.set(v, true);
        return this$.inited = true;
      });
      img.src = config.img;
      svg.appendChild(group[0]);
      svg.appendChild(group[1]);
    }
    svg.attrs({
      width: '100%',
      height: '100%'
    });
    this.transition = {
      value: {
        src: 0,
        des: 0
      },
      time: {},
      ease: function(t, b, c, d){
        t = t / (d * 0.5);
        if (t < 1) {
          return c * 0.5 * t * t + b;
        }
        t = t - 1;
        return -c * 0.5 * (t * (t - 2) - 1) + b;
      },
      handler: function(time, doTransition){
        var ref$, min, max, prec, dv, dt, dur, v, p, node, style, box, dir;
        doTransition == null && (doTransition = true);
        if (this.time.src == null) {
          this.time.src = time;
        }
        ref$ = [config["min"], config["max"], 1 / config["precision"]], min = ref$[0], max = ref$[1], prec = ref$[2];
        ref$ = [this.value.des - this.value.src, (time - this.time.src) * 0.001, +config["duration"] || 1], dv = ref$[0], dt = ref$[1], dur = ref$[2];
        v = doTransition
          ? this.ease(dt, this.value.src, dv, dur)
          : this.value.des;
        if (config.precision) {
          v = Math.round(v * prec) / prec;
        } else if (doTransition) {
          v = Math.round(v);
        }
        v >= min || (v = min);
        v <= max || (v = max);
        text.textContent = v;
        p = 100.0 * (v - min) / (max - min);
        if (isStroke) {
          node = path1;
          style = {
            "stroke-dasharray": config["stroke-dir"] === 'reverse'
              ? "0 " + length * (100 - p) * 0.01 + " " + length * p * 0.01 + " 0"
              : p * 0.01 * length + " " + ((100 - p) * 0.01 * length + 1)
          };
        } else {
          box = group[1].getBBox();
          dir = config["fill-dir"];
          style = dir === 'btt' || !dir
            ? {
              y: box.y + box.height * (100 - p) * 0.01,
              height: box.height * p * 0.01,
              x: box.x,
              width: box.width
            }
            : dir === 'ttb'
              ? {
                y: box.y,
                height: box.height * p * 0.01,
                x: box.x,
                width: box.width
              }
              : dir === 'ltr'
                ? {
                  y: box.y,
                  height: box.height,
                  x: box.x,
                  width: box.width * p * 0.01
                }
                : dir === 'rtl' ? {
                  y: box.y,
                  height: box.height,
                  x: box.x + box.width * (100 - p) * 0.01,
                  width: box.width * p * 0.01
                } : void 8;
          node = svg.querySelector('rect');
        }
        node.attrs(style);
        if (dt >= dur) {
          delete this.time.src;
          return false;
        }
        return true;
      },
      start: function(src, des, doTransition){
        var ref$, this$ = this;
        ref$ = this.value;
        ref$.src = src;
        ref$.des = des;
        !!(root.offsetWidth || root.offsetHeight || root.getClientRects().length);
        if (!doTransition || !(root.offsetWidth || root.offsetHeight || root.getClientRects().length)) {
          this.time.src = 0;
          this.handler(1000, false);
          return;
        }
        return handler.add(id.key, function(time){
          return this$.handler(time);
        });
      }
    };
    this.set = function(v, doTransition){
      var src, des;
      doTransition == null && (doTransition = true);
      src = this.value || 0;
      if (v != null) {
        this.value = v;
      } else {
        v = this.value;
      }
      des = this.value;
      return this.transition.start(src, des, doTransition);
    };
    this.set(+config.value || 0, config["transition-in"]) || false;
    return this;
  };
  return window.addEventListener('load', function(){
    var i$, ref$, len$, node, results$ = [];
    for (i$ = 0, len$ = (ref$ = document.querySelectorAll('.ldBar')).length; i$ < len$; ++i$) {
      node = ref$[i$];
      if (!node.ldBar) {
        results$.push(node.ldBar = new ldBar(node));
      }
    }
    return results$;
  }, false);
})();
module.exports = ldBar;
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}

},{"./presets":2}],2:[function(require,module,exports){
// Generated by LiveScript 1.3.1
var presets, out$ = typeof exports != 'undefined' && exports || this;
out$.presets = presets = {
  rainbow: {
    "type": 'stroke',
    "path": 'M10 10L90 10',
    "stroke": 'data:ldbar/res,gradient(0,1,#a551df,#fd51ad,#ff7f82,#ffb874,#ffeb90)',
    "bbox": "10 10 80 10"
  },
  energy: {
    "type": 'fill',
    "path": 'M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5',
    "stroke": '#f00',
    "fill": 'data:ldbar/res,gradient(45,2,#4e9,#8fb,#4e9)',
    "fill-dir": "ltr",
    "fill-background": '#444',
    "fill-background-extrude": 1,
    "bbox": "10 5 80 10"
  },
  stripe: {
    "type": 'fill',
    "path": 'M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5',
    "stroke": '#f00',
    "fill": 'data:ldbar/res,stripe(#25b,#58e,1)',
    "fill-dir": "ltr",
    "fill-background": '#ddd',
    "fill-background-extrude": 1,
    "bbox": "10 5 80 10"
  },
  text: {
    "type": 'fill',
    "img": "data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"70\" height=\"20\" viewBox=\"0 0 70 20\"><text x=\"35\" y=\"10\" text-anchor=\"middle\" dominant-baseline=\"central\" font-family=\"arial\">LOADING</text></svg>",
    "fill-background-extrude": 1.3,
    "pattern-size": 100,
    "fill-dir": "ltr",
    "img-size": "70,20",
    "bbox": "0 0 70 20"
  },
  line: {
    "type": 'stroke',
    "path": 'M10 10L90 10',
    "stroke": '#25b',
    "stroke-width": 3,
    "stroke-trail": '#ddd',
    "stroke-trail-width": 1,
    "bbox": "10 10 80 10"
  },
  fan: {
    "type": 'stroke',
    "path": 'M10 90A40 40 0 0 1 90 90',
    "fill-dir": 'btt',
    "fill": '#25b',
    "fill-background": '#ddd',
    "fill-background-extrude": 3,
    "stroke-dir": 'normal',
    "stroke": '#25b',
    "stroke-width": '3',
    "stroke-trail": '#ddd',
    "stroke-trail-width": 0.5,
    "bbox": "10 50 80 40"
  },
  circle: {
    "type": 'stroke',
    "path": 'M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10',
    "fill-dir": 'btt',
    "fill": '#25b',
    "fill-background": '#ddd',
    "fill-background-extrude": 3,
    "stroke-dir": 'normal',
    "stroke": '#25b',
    "stroke-width": '3',
    "stroke-trail": '#ddd',
    "stroke-trail-width": 0.5,
    "bbox": "10 10 80 80"
  },
  bubble: {
    "type": 'fill',
    "path": 'M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10',
    "fill-dir": 'btt',
    "fill": 'data:ldbar/res,bubble(#39d,#cef)',
    "pattern-size": "150",
    "fill-background": '#ddd',
    "fill-background-extrude": 2,
    "stroke-dir": 'normal',
    "stroke": '#25b',
    "stroke-width": '3',
    "stroke-trail": '#ddd',
    "stroke-trail-width": 0.5,
    "bbox": "10 10 80 80"
  }
};

},{}]},{},[1]);

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){var presets,simpleStr,wrap,slice$=[].slice,toString$={}.toString;presets=require("./presets").presets;simpleStr=function(arr){return arr.join("")};wrap=function(content){return"data:image/svg+xml;base64,"+btoa(content)};(function(){var make,handler,ldBar;make={head:function(viewBox){return'<?xml version="1.0" encoding="utf-8"?>\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="'+viewBox+'">'},gradient:function(dir,dur){var colors,ret,len,gx,gy,x,y,i$,i,idx;dir==null&&(dir=45);dur==null&&(dur=1);colors=slice$.call(arguments,2);ret=[this.head("0 0 100 100")];len=colors.length*4+1;dir=dir*Math.PI/180;gx=Math.pow(Math.cos(dir),2);gy=Math.sqrt(gx-Math.pow(gx,2));if(dir>Math.PI*.25){gy=Math.pow(Math.sin(dir),2);gx=Math.sqrt(gy-Math.pow(gy,2))}x=gx*100;y=gy*100;ret.push('<defs><linearGradient id="gradient" x1="0" x2="'+gx+'" y1="0" y2="'+gy+'">');for(i$=0;i$<len;++i$){i=i$;idx=i*100/(len-1);ret.push('<stop offset="'+idx+'%" stop-color="'+colors[i%colors.length]+'"/>')}ret.push('</linearGradient></defs>\n<rect x="0" y="0" width="400" height="400" fill="url(#gradient)">\n<animateTransform attributeName="transform" type="translate" from="-'+x+",-"+y+'"\nto="0,0" dur="'+dur+'s" repeatCount="indefinite"/></rect></svg>');return wrap(ret.join(""))},stripe:function(c1,c2,dur){var ret,i;c1==null&&(c1="#b4b4b4");c2==null&&(c2="#e6e6e6");dur==null&&(dur=1);ret=[this.head("0 0 100 100")];ret=ret.concat(['<rect fill="'+c2+'" width="100" height="100"/>',"<g><g>",function(){var i$,results$=[];for(i$=0;i$<13;++i$){i=i$;results$.push('<polygon fill="'+c1+'" '+('points="'+(-90+i*20)+",100 "+(-100+i*20)+",")+("100 "+(-60+i*20)+",0 "+(-50+i*20)+',0 "/>'))}return results$}().join(""),'</g><animateTransform attributeName="transform" type="translate" ','from="0,0" to="20,0" dur="'+dur+'s" repeatCount="indefinite"/></g></svg>'].join(""));return wrap(ret)},bubble:function(c1,c2,count,dur,size,sw){var ret,i$,i,idx,x,r,d;c1==null&&(c1="#39d");c2==null&&(c2="#9cf");count==null&&(count=15);dur==null&&(dur=1);size==null&&(size=6);sw==null&&(sw=1);ret=[this.head("0 0 200 200"),'<rect x="0" y="0" width="200" height="200" fill="'+c1+'"/>'];for(i$=0;i$<count;++i$){i=i$;idx=-(i/count)*dur;x=Math.random()*184+8;r=(Math.random()*.7+.3)*size;d=dur*(1+Math.random()*.5);ret.push(['<circle cx="'+x+'" cy="0" r="'+r+'" fill="none" stroke="'+c2+'" stroke-width="'+sw+'">','<animate attributeName="cy" values="190;-10" times="0;1" ','dur="'+d+'s" begin="'+idx+'s" repeatCount="indefinite"/>',"</circle>",'<circle cx="'+x+'" cy="0" r="'+r+'" fill="none" stroke="'+c2+'" stroke-width="'+sw+'">','<animate attributeName="cy" values="390;190" times="0;1" ','dur="'+d+'s" begin="'+idx+'s" repeatCount="indefinite"/>',"</circle>"].join(""))}return wrap(ret.join("")+"</svg>")}};handler={queue:{},running:false,main:function(timestamp){var keepon,removed,k,ref$,func,ret,this$=this;keepon=false;removed=[];for(k in ref$=this.queue){func=ref$[k];ret=func(timestamp);if(!ret){removed.push(func)}keepon=keepon||ret}for(k in ref$=this.queue){func=ref$[k];if(removed.indexOf(func)>=0){delete this.queue[k]}}if(keepon){return requestAnimationFrame(function(it){return this$.main(it)})}else{return this.running=false}},add:function(key,f){var this$=this;if(!this.queue[key]){this.queue[key]=f}if(!this.running){this.running=true;return requestAnimationFrame(function(it){return this$.main(it)})}}};window.ldBar=ldBar=function(selector,option){var xmlns,root,cls,idPrefix,id,domTree,newNode,x$,config,attr,that,isStroke,parseRes,dom,svg,text,group,length,path0,path1,patimg,img,ret,size,this$=this;option==null&&(option={});xmlns={xlink:"http://www.w3.org/1999/xlink"};root=toString$.call(selector).slice(8,-1)==="String"?document.querySelector(selector):selector;if(!root.ldBar){root.ldBar=this}else{return root.ldBar}cls=root.getAttribute("class")||"";if(!~cls.indexOf("ldBar")){root.setAttribute("class",cls+" ldBar")}idPrefix="ldBar-"+Math.random().toString(16).substring(2);id={key:idPrefix,clip:idPrefix+"-clip",filter:idPrefix+"-filter",pattern:idPrefix+"-pattern",mask:idPrefix+"-mask",maskPath:idPrefix+"-mask-path"};domTree=function(n,o){var k,v;n=newNode(n);for(k in o){v=o[k];if(k!=="attr"){n.appendChild(domTree(k,v||{}))}}n.attrs(o.attr||{});return n};newNode=function(n){return document.createElementNS("http://www.w3.org/2000/svg",n)};x$=document.body.__proto__.__proto__.__proto__;x$.text=function(t){return this.appendChild(document.createTextNode(t))};x$.attrs=function(o){var k,v,ret,results$=[];for(k in o){v=o[k];ret=/([^:]+):([^:]+)/.exec(k);if(!ret||!xmlns[ret[1]]){results$.push(this.setAttribute(k,v))}else{results$.push(this.setAttributeNS(xmlns[ret[1]],k,v))}}return results$};x$.styles=function(o){var k,v,results$=[];for(k in o){v=o[k];results$.push(this.style[k]=v)}return results$};x$.append=function(n){var r;return this.appendChild(r=document.createElementNS("http://www.w3.og/2000/svg",n))};x$.attr=function(n,v){if(v!=null){return this.setAttribute(n,v)}else{return this.getAttribute(n)}};config={type:"stroke",img:"",path:"M10 10L90 10M90 8M90 12","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"pattern-size":null,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,duration:1,easing:"linear",value:0,"img-size":null,bbox:null,"set-dim":true,"aspect-ratio":"xMidYMid","transition-in":false,min:0,max:100,precision:0,padding:undefined};config["preset"]=root.attr("data-preset")||option["preset"];if(config.preset!=null){import$(config,presets[config.preset])}for(attr in config){if(that=that=root.attr("data-"+attr)){config[attr]=that}}import$(config,option);if(config.img){config.path=null}isStroke=config.type==="stroke";parseRes=function(v){var parser,ret;parser=/data:ldbar\/res,([^()]+)\(([^)]+)\)/;ret=parser.exec(v);if(!ret){return v}return ret=make[ret[1]].apply(make,ret[2].split(","))};config.fill=parseRes(config.fill);config.stroke=parseRes(config.stroke);if(config["set-dim"]==="false"){config["set-dim"]=false}dom={attr:{"xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:config["aspect-ratio"],width:"100%",height:"100%"},defs:{filter:{attr:{id:id.filter,x:-1,y:-1,width:3,height:3},feMorphology:{attr:{operator:+config["fill-background-extrude"]>=0?"dilate":"erode",radius:Math.abs(+config["fill-background-extrude"])}},feColorMatrix:{attr:{values:"0 0 0 0 1    0 0 0 0 1    0 0 0 0 1    0 0 0 1 0",result:"cm"}}},mask:{attr:{id:id.mask},image:{attr:{"xlink:href":config.img,filter:"url(#"+id.filter+")",x:0,y:0,width:100,height:100,preserveAspectRatio:config["aspect-ratio"]}}},g:{mask:{attr:{id:id.maskPath},path:{attr:{d:config.path||"",fill:"#fff",stroke:"#fff",filter:"url(#"+id.filter+")"}}}},clipPath:{attr:{id:id.clip},rect:{attr:{class:"mask",fill:"#000"}}},pattern:{attr:{id:id.pattern,patternUnits:"userSpaceOnUse",x:0,y:0,width:300,height:300},image:{attr:{x:0,y:0,width:300,height:300}}}}};svg=domTree("svg",dom);text=document.createElement("div");text.setAttribute("class","ldBar-label");root.appendChild(svg);root.appendChild(text);group=[0,0];length=0;this.fit=function(){var that,box,d,rect;if(that=config["bbox"]){box=that.split(" ").map(function(it){return+it.trim()});box={x:box[0],y:box[1],width:box[2],height:box[3]}}else{box=group[1].getBBox()}if(!box||box.width===0||box.height===0){box={x:0,y:0,width:100,height:100}}d=Math.max.apply(null,["stroke-width","stroke-trail-width","fill-background-extrude"].map(function(it){return config[it]}))*1.5;if(config["padding"]!=null){d=+config["padding"]}svg.attrs({viewBox:[box.x-d,box.y-d,box.width+d*2,box.height+d*2].join(" ")});if(config["set-dim"]){["width","height"].map(function(it){if(!root.style[it]||this$.fit[it]){root.style[it]=box[it]+d*2+"px";return this$.fit[it]=true}})}rect=group[0].querySelector("rect");if(rect){return rect.attrs({x:box.x-d,y:box.y-d,width:box.width+d*2,height:box.height+d*2})}};if(config.path){if(isStroke){group[0]=domTree("g",{path:{attr:{d:config.path,fill:"none",class:"baseline"}}})}else{group[0]=domTree("g",{rect:{attr:{x:0,y:0,width:100,height:100,mask:"url(#"+id.maskPath+")",fill:config["fill-background"],class:"frame"}}})}svg.appendChild(group[0]);group[1]=domTree("g",{path:{attr:{d:config.path,class:isStroke?"mainline":"solid","clip-path":config.type==="fill"?"url(#"+id.clip+")":""}}});svg.appendChild(group[1]);path0=group[0].querySelector(isStroke?"path":"rect");path1=group[1].querySelector("path");if(isStroke){path1.attrs({fill:"none"})}patimg=svg.querySelector("pattern image");img=new Image;img.addEventListener("load",function(){var box,that;box=(that=config["pattern-size"])?{width:+that,height:+that}:img.width&&img.height?{width:img.width,height:img.height}:{width:300,height:300};svg.querySelector("pattern").attrs({width:box.width,height:box.height});return patimg.attrs({width:box.width,height:box.height})});if(/.+\..+|^data:/.exec(!isStroke?config.fill:config.stroke)){img.src=!isStroke?config.fill:config.stroke;patimg.attrs({"xlink:href":img.src})}if(isStroke){path0.attrs({stroke:config["stroke-trail"],"stroke-width":config["stroke-trail-width"]});path1.attrs({"stroke-width":config["stroke-width"],stroke:/.+\..+|^data:/.exec(config.stroke)?"url(#"+id.pattern+")":config.stroke})}if(config.fill&&!isStroke){path1.attrs({fill:/.+\..+|^data:/.exec(config.fill)?"url(#"+id.pattern+")":config.fill})}length=path1.getTotalLength();this.fit();this.inited=true}else if(config.img){if(config["img-size"]){ret=config["img-size"].split(",");size={width:+ret[0],height:+ret[1]}}else{size={width:100,height:100}}group[0]=domTree("g",{rect:{attr:{x:0,y:0,width:100,height:100,mask:"url(#"+id.mask+")",fill:config["fill-background"]}}});svg.querySelector("mask image").attrs({width:size.width,height:size.height});group[1]=domTree("g",{image:{attr:{width:size.width,height:size.height,x:0,y:0,preserveAspectRatio:config["aspect-ratio"],"clip-path":config.type==="fill"?"url(#"+id.clip+")":"","xlink:href":config.img,class:"solid"}}});img=new Image;img.addEventListener("load",function(){var ret,size,v;if(config["img-size"]){ret=config["img-size"].split(",");size={width:+ret[0],height:+ret[1]}}else if(img.width&&img.height){size={width:img.width,height:img.height}}else{size={width:100,height:100}}svg.querySelector("mask image").attrs({width:size.width,height:size.height});group[1].querySelector("image").attrs({width:size.width,height:size.height});this$.fit();v=this$.value;this$.value=undefined;this$.set(v,true);return this$.inited=true});img.src=config.img;svg.appendChild(group[0]);svg.appendChild(group[1])}svg.attrs({width:"100%",height:"100%"});this.transition={value:{src:0,des:0},time:{},ease:function(t,b,c,d){t=t/(d*.5);if(t<1){return c*.5*t*t+b}t=t-1;return-c*.5*(t*(t-2)-1)+b},handler:function(time,doTransition){var ref$,min,max,prec,dv,dt,dur,v,p,node,style,box,dir;doTransition==null&&(doTransition=true);if(this.time.src==null){this.time.src=time}ref$=[config["min"],config["max"],1/config["precision"]],min=ref$[0],max=ref$[1],prec=ref$[2];ref$=[this.value.des-this.value.src,(time-this.time.src)*.001,+config["duration"]||1],dv=ref$[0],dt=ref$[1],dur=ref$[2];v=doTransition?this.ease(dt,this.value.src,dv,dur):this.value.des;if(config.precision){v=Math.round(v*prec)/prec}else if(doTransition){v=Math.round(v)}v>=min||(v=min);v<=max||(v=max);text.textContent=v;p=100*(v-min)/(max-min);if(isStroke){node=path1;style={"stroke-dasharray":config["stroke-dir"]==="reverse"?"0 "+length*(100-p)*.01+" "+length*p*.01+" 0":p*.01*length+" "+((100-p)*.01*length+1)}}else{box=group[1].getBBox();dir=config["fill-dir"];style=dir==="btt"||!dir?{y:box.y+box.height*(100-p)*.01,height:box.height*p*.01,x:box.x,width:box.width}:dir==="ttb"?{y:box.y,height:box.height*p*.01,x:box.x,width:box.width}:dir==="ltr"?{y:box.y,height:box.height,x:box.x,width:box.width*p*.01}:dir==="rtl"?{y:box.y,height:box.height,x:box.x+box.width*(100-p)*.01,width:box.width*p*.01}:void 8;node=svg.querySelector("rect")}node.attrs(style);if(dt>=dur){delete this.time.src;return false}return true},start:function(src,des,doTransition){var ref$,this$=this;ref$=this.value;ref$.src=src;ref$.des=des;!!(root.offsetWidth||root.offsetHeight||root.getClientRects().length);if(!doTransition||!(root.offsetWidth||root.offsetHeight||root.getClientRects().length)){this.time.src=0;this.handler(1e3,false);return}return handler.add(id.key,function(time){return this$.handler(time)})}};this.set=function(v,doTransition){var src,des;doTransition==null&&(doTransition=true);src=this.value||0;if(v!=null){this.value=v}else{v=this.value}des=this.value;return this.transition.start(src,des,doTransition)};this.set(+config.value||0,config["transition-in"])||false;return this};return window.addEventListener("load",function(){var i$,ref$,len$,node,results$=[];for(i$=0,len$=(ref$=document.querySelectorAll(".ldBar")).length;i$<len$;++i$){node=ref$[i$];if(!node.ldBar){results$.push(node.ldBar=new ldBar(node))}}return results$},false)})();module.exports=ldBar;function import$(obj,src){var own={}.hasOwnProperty;for(var key in src)if(own.call(src,key))obj[key]=src[key];return obj}},{"./presets":2}],2:[function(require,module,exports){var presets,out$=typeof exports!="undefined"&&exports||this;out$.presets=presets={rainbow:{type:"stroke",path:"M10 10L90 10",stroke:"data:ldbar/res,gradient(0,1,#a551df,#fd51ad,#ff7f82,#ffb874,#ffeb90)",bbox:"10 10 80 10"},energy:{type:"fill",path:"M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5",stroke:"#f00",fill:"data:ldbar/res,gradient(45,2,#4e9,#8fb,#4e9)","fill-dir":"ltr","fill-background":"#444","fill-background-extrude":1,bbox:"10 5 80 10"},stripe:{type:"fill",path:"M15 5L85 5A5 5 0 0 1 85 15L15 15A5 5 0 0 1 15 5",stroke:"#f00",fill:"data:ldbar/res,stripe(#25b,#58e,1)","fill-dir":"ltr","fill-background":"#ddd","fill-background-extrude":1,bbox:"10 5 80 10"},text:{type:"fill",img:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" viewBox="0 0 70 20"><text x="35" y="10" text-anchor="middle" dominant-baseline="central" font-family="arial">LOADING</text></svg>',"fill-background-extrude":1.3,"pattern-size":100,"fill-dir":"ltr","img-size":"70,20",bbox:"0 0 70 20"},line:{type:"stroke",path:"M10 10L90 10",stroke:"#25b","stroke-width":3,"stroke-trail":"#ddd","stroke-trail-width":1,bbox:"10 10 80 10"},fan:{type:"stroke",path:"M10 90A40 40 0 0 1 90 90","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 50 80 40"},circle:{type:"stroke",path:"M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10","fill-dir":"btt",fill:"#25b","fill-background":"#ddd","fill-background-extrude":3,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 10 80 80"},bubble:{type:"fill",path:"M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10","fill-dir":"btt",fill:"data:ldbar/res,bubble(#39d,#cef)","pattern-size":"150","fill-background":"#ddd","fill-background-extrude":2,"stroke-dir":"normal",stroke:"#25b","stroke-width":"3","stroke-trail":"#ddd","stroke-trail-width":.5,bbox:"10 10 80 80"}}},{}]},{},[1]);

   
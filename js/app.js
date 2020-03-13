
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
  multiple: true,
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
  inputEl: '#demo-picker-describe-moreperiodlength',
  cols: [
    {
      textAlign: 'center',
      values: ['1 Day','2 Days', '3 Days','4 Days','5 Days','6 Days','7 Days','8 Days','9 Days', '10 Days', '11 Days', '12 Days', '13 Days', '14 Days', '15 Days', '16 Days', '17 Days', '18 Days', '19 Days', '20 Days', '21 Days', '22 Days', '23 Days', '24 Days', '25 Days', '26 Days', '27 Days', '28 Days', '29 Days', '30 Days', '31 Days', '32 Days', '33 Days', '34 Days', '35 Days']
    }
  ]
});



//more period length
var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-describe-morecyclelength',
  cols: [
    {
      textAlign: 'center',
      values: ['1 Day','2 Days', '3 Days','4 Days','5 Days','6 Days','7 Days','8 Days','9 Days', '10 Days', '11 Days', '12 Days', '13 Days', '14 Days', '15 Days', '16 Days', '17 Days', '18 Days', '19 Days', '20 Days', '21 Days', '22 Days', '23 Days', '24 Days', '25 Days', '26 Days', '27 Days', '28 Days', '29 Days', '30 Days', '31 Days', '32 Days', '33 Days', '34 Days', '35 Days','36 Days', '37 Days', '38 Days', '39 Days', '40 Days', '41 Days', '42 Days', '43 Days', '44 Days', '45 Days', '46 Days', '47 Days', '48 Days', '49 Days', '50 Days', '51 Days', '52 Days', '53 Days', '54 Days', '55 Days', '56 Days', '57 Days', '58 Days','59 Days', '60 Days', '61 Days', '62 Days', '63 Days', '64 Days', '65 Days', '66 Days', '67 Days', '68 Days', '69 Days', '70 Days', '71 Days', '72 Days', '73 Days', '74 Days', '75 Days', '76 Days', '77 Days', '78 Days', '79 Days', '80 Days', '81 Days','82 Days', '83 Days', '84 Days', '85 Days', '86 Days', '87 Days', '88 Days', '89 Days', '90 Days', '91 Days', '92 Days', '93 Days', '94 Days', '95 Days', '96 Days', '97 Days', '98 Days', '99 Days']
    }
  ]
});

//more period length
var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-describe-morelutealphase',
  cols: [
    {
      textAlign: 'center',
      values: ['1 Day','2 Days', '3 Days','4 Days','5 Days','6 Days','7 Days','8 Days','9 Days', '10 Days', '11 Days', '12 Days', '13 Days', '14 Days', '15 Days', '16 Days', '17 Days', '18 Days', '19 Days', '20 Days', '21 Days', '22 Days', '23 Days', '24 Days', '25 Days', '26 Days', '27 Days', '28 Days', '29 Days', '30 Days', '31 Days', '32 Days', '33 Days', '34 Days', '35 Days','36 Days', '37 Days', '38 Days', '39 Days', '40 Days', '41 Days', '42 Days', '43 Days', '44 Days', '45 Days', '46 Days', '47 Days', '48 Days', '49 Days', '50 Days', '51 Days', '52 Days', '53 Days', '54 Days', '55 Days', '56 Days', '57 Days', '58 Days','59 Days', '60 Days', '61 Days', '62 Days', '63 Days', '64 Days', '65 Days', '66 Days', '67 Days', '68 Days', '69 Days', '70 Days', '71 Days', '72 Days', '73 Days', '74 Days', '75 Days', '76 Days', '77 Days', '78 Days', '79 Days', '80 Days', '81 Days','82 Days', '83 Days', '84 Days', '85 Days', '86 Days', '87 Days', '88 Days', '89 Days', '90 Days', '91 Days', '92 Days', '93 Days', '94 Days', '95 Days', '96 Days', '97 Days', '98 Days', '99 Days']
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



//report period length
var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-describe-reportperiodperiodlength',
  cols: [
    {
      textAlign: 'center',
      values: ['1 Day','2 Days', '3 Days','4 Days','5 Days','6 Days','7 Days','8 Days','9 Days', '10 Days', '11 Days', '12 Days', '13 Days', '14 Days', '15 Days', '16 Days', '17 Days', '18 Days', '19 Days', '20 Days', '21 Days', '22 Days', '23 Days', '24 Days', '25 Days', '26 Days', '27 Days', '28 Days', '29 Days', '30 Days', '31 Days', '32 Days', '33 Days', '34 Days', '35 Days']
    }
  ]
});



//Report cycle length
var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-describe-reportperiodcyclelength',
  cols: [
    {
      textAlign: 'center',
      values: ['1 Day','2 Days', '3 Days','4 Days','5 Days','6 Days','7 Days','8 Days','9 Days', '10 Days', '11 Days', '12 Days', '13 Days', '14 Days', '15 Days', '16 Days', '17 Days', '18 Days', '19 Days', '20 Days', '21 Days', '22 Days', '23 Days', '24 Days', '25 Days', '26 Days', '27 Days', '28 Days', '29 Days', '30 Days', '31 Days', '32 Days', '33 Days', '34 Days', '35 Days','36 Days', '37 Days', '38 Days', '39 Days', '40 Days', '41 Days', '42 Days', '43 Days', '44 Days', '45 Days', '46 Days', '47 Days', '48 Days', '49 Days', '50 Days', '51 Days', '52 Days', '53 Days', '54 Days', '55 Days', '56 Days', '57 Days', '58 Days','59 Days', '60 Days', '61 Days', '62 Days', '63 Days', '64 Days', '65 Days', '66 Days', '67 Days', '68 Days', '69 Days', '70 Days', '71 Days', '72 Days', '73 Days', '74 Days', '75 Days', '76 Days', '77 Days', '78 Days', '79 Days', '80 Days', '81 Days','82 Days', '83 Days', '84 Days', '85 Days', '86 Days', '87 Days', '88 Days', '89 Days', '90 Days', '91 Days', '92 Days', '93 Days', '94 Days', '95 Days', '96 Days', '97 Days', '98 Days', '99 Days']
    }
  ]
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
   
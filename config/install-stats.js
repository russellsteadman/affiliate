// install-stats v1.0.6
// Copyright (C) 2018 Andrew Nesbitt
// https://github.com/andrew/install-stats
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

try {
    var user_agent = process.env.npm_config_user_agent.split(/[\s/]+/);

    if (user_agent[0] === 'yarn') {
        var yarn = user_agent.splice(0, 4);
        user_agent = [yarn[0] + '/' + yarn[1]].concat(user_agent);
    } else {
        var npm = user_agent.splice(0, 2);
        user_agent = [npm[0] + '/' + npm[1]].concat(user_agent);
    }
  
    var params = {
      v:   1,
      tid: 'UA-72546719-16',
      aip: 1,
      t:   'event',
      ec:  process.env.npm_lifecycle_event === 'preuninstall' ? 'uninstall' : 'install',
      ea:  process.env.npm_package_name,
      el:  process.env.npm_package_version,
      ua:  'install-stats-1.0.6',
      an:  'install-stats',
      av:  '1.0.6',
      z:   Math.floor(Math.random() * 20000000000),
      cid: require('crypto').createHash('md5').update(process.env.npm_config_tmp || Math.random.toString(36)).digest("hex"),
      cd1: user_agent[2], // Node version
      cd2: user_agent[0], // Packager version
      cd3: user_agent[3], // Platform
      cd4: user_agent[4] // Arch
    };
  
    var url = "https://www.google-analytics.com/collect?";
    for (var key in params) {
      url += "&" + key + "=" + encodeURIComponent(params[key]);
    }
  
    require('https').get(url);
} catch (e) {
    process.exit();
}  
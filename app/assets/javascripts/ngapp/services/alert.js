'use strict';

hnApp.factory('Notification', function($rootScope) {
  var notificationService;
  $rootScope.notifications = [];

  return notificationService = {
    add: function(type, msg) {
      return $rootScope.notifications.push({
        type: type,
        msg: msg,
        close: function() {
          return notificationService.closeNotification(this);
        }
      });
    },
    closeNotification: function(notificaton) {
      return this.closeNotificationIdx($rootScope.notifications.indexOf(notificaton));
    },
    closeNotificationIdx: function(index) {
      return $rootScope.notifications.splice(index, 1);
    },
    clear: function() {
      $rootScope.notifications = [];
    }
  };

});
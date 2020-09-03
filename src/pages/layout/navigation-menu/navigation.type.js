export const NavigationType = {
    User: (item) => {
        item.route = '/personal-user';
        item.queryParams = {
            moduleId: item.id
        }
        item.icon = 'fa-user';
    },
    BaseModule: (item) => {
        if (item.use_questionnaire) {
            item.route = 'private-data/list';
        } else {
            item.route = '/standard/list';
        }

        item.icon = 'fa-dashboard';
        item.queryParams = {
            moduleId: item.id
        }
    },
    UserMessage: (item) => {
        item.route = '/communication/message-list';
        item.queryParams = {
            moduleId: item.id
        }
        item.icon = 'fa-comment';
    },
    TechnicalSupport: (item) => {
        item.route = '/contacts';
        item.queryParams = {
            moduleId: item.id
        }
        item.icon = 'fa-wrench';
    }
};
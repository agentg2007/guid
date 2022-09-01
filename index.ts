export default {
    new: () => {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-yxxx-yxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    },
    isGuid: (value: any) => {
        const regex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;
        return typeof value === "string" && regex.test(value.toLowerCase())
    }
}
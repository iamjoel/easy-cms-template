module.exports = {
  "viewFields": [
    "id",
    "createTime",
    "updateTime",
    "delFlg",
    "name"
  ],
  "validFields": [
    {
      "key": "id",
      "name": "36位的 Guid",
      "rule": {
        "required": false,
        "type": "string",
        "max": "36"
      },
      "validType": "all"
    },
    {
      "key": "createTime",
      "name": "创建时间",
      "rule": {
        "required": false,
        "type": "number"
      },
      "validType": "all"
    },
    {
      "key": "updateTime",
      "name": "更新时间",
      "rule": {
        "required": false,
        "type": "number"
      },
      "validType": "all"
    },
    {
      "key": "delFlg",
      "name": "删除标志位",
      "rule": {
        "required": false,
        "type": "int"
      },
      "validType": "all"
    },
    {
      "key": "name",
      "name": "名称",
      "rule": {
        "required": true,
        "type": "string",
        "max": 10
      },
      "validType": "all"
    }
  ]
}
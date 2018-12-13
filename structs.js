var confirm_with_seller = {

  view_id: "0",
  view_type: "Confirm Product View",
  order_id: "1234",
  dates: [{
    date: "01/01/2018 01:40:32",
    date_id: "0",
    date_type: "Ordered Date"
  }],
  buyer: {
    name: "Mahima Kaul",
    id: "1234",
    phone: "+917666601601"
  },
  seller: {
    name: "Mahima Kaul",
    id: "1234",
    phone: "+917666601601"
  },
  call_to_action: [{
      call: "Confirm",
      action_url: ""
    },
    {
      call: "Cancel",
      action_url: ""
    }, {
      call: "Comment",
      action_url: ""
    }
  ]
};

var call_back_request = {

  view_id: "0",
  view_type: "Confirm Product View",
  order_id: "1234",
  dates: [{
      date: "01/01/2018 01:40:32",
      date_id: "0",
      date_type: "Ordered Date"
    },
    {
      date: "01/01/2018 01:40:32",
      date_id: "1",
      date_type: "Callback Requested Date"
    }
  ],
  seller: {
    name: "Mahima Kaul",
    id: "1234",
    phone: "+917666601601"
  },
  call_to_action: [{
      call: "Call & Confirm",
      action_url: ""
    },
    {
      call: "Cancel",
      action_url: ""
    }, {
      call: "Didn't Answer",
      action_url: ""
    }
  ]
}
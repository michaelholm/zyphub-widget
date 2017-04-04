<template lang="html">
  <nav class="nav has-shadow" >
    <div class="nav-left">
      <a class="nav-item is-brand" to="/">ZypHub</a>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>


<style>

/** labels & tags */
.ui.red.label,.ui.red.labels .label {
    background-color: #DB2828!important;
    border-color: #DB2828!important;
    color: #FFF!important
}

.ui.red.labels .label:hover,a.ui.red.label:hover {
    background-color: #d01919!important;
    border-color: #d01919!important;
    color: #FFF!important
}

.ui.red.corner.label,.ui.red.corner.label:hover {
    background-color: transparent!important
}

.ui.red.ribbon.label {
    border-color: #b21e1e!important
}

.ui.basic.red.label {
    background-color: #FFF!important;
    color: #DB2828!important;
    border-color: #DB2828!important
}

.ui.basic.red.labels a.label:hover,a.ui.basic.red.label:hover {
    background-color: #FFF!important;
    color: #d01919!important;
    border-color: #d01919!important
}

.ui.orange.label,.ui.orange.labels .label {
    background-color: #F2711C!important;
    border-color: #F2711C!important;
    color: #FFF!important
}

.ui.orange.labels .label:hover,a.ui.orange.label:hover {
    background-color: #f26202!important;
    border-color: #f26202!important;
    color: #FFF!important
}

.ui.orange.corner.label,.ui.orange.corner.label:hover {
    background-color: transparent!important
}

.ui.orange.ribbon.label {
    border-color: #cf590c!important
}

.ui.basic.orange.label {
    background-color: #FFF!important;
    color: #F2711C!important;
    border-color: #F2711C!important
}

.ui.basic.orange.labels a.label:hover,a.ui.basic.orange.label:hover {
    background-color: #FFF!important;
    color: #f26202!important;
    border-color: #f26202!important
}

.ui.yellow.label,.ui.yellow.labels .label {
    background-color: #FBBD08!important;
    border-color: #FBBD08!important;
    color: #FFF!important
}

.ui.yellow.labels .label:hover,a.ui.yellow.label:hover {
    background-color: #eaae00!important;
    border-color: #eaae00!important;
    color: #FFF!important
}

.ui.yellow.corner.label,.ui.yellow.corner.label:hover {
    background-color: transparent!important
}

.ui.yellow.ribbon.label {
    border-color: #cd9903!important
}

.ui.basic.yellow.label {
    background-color: #FFF!important;
    color: #FBBD08!important;
    border-color: #FBBD08!important
}

.ui.basic.yellow.labels a.label:hover,a.ui.basic.yellow.label:hover {
    background-color: #FFF!important;
    color: #eaae00!important;
    border-color: #eaae00!important
}

.ui.olive.label,.ui.olive.labels .label {
    background-color: #B5CC18!important;
    border-color: #B5CC18!important;
    color: #FFF!important
}

.ui.olive.labels .label:hover,a.ui.olive.label:hover {
    background-color: #a7bd0d!important;
    border-color: #a7bd0d!important;
    color: #FFF!important
}

.ui.olive.corner.label,.ui.olive.corner.label:hover {
    background-color: transparent!important
}

.ui.olive.ribbon.label {
    border-color: #198f35!important
}

.ui.basic.olive.label {
    background-color: #FFF!important;
    color: #B5CC18!important;
    border-color: #B5CC18!important
}

.ui.basic.olive.labels a.label:hover,a.ui.basic.olive.label:hover {
    background-color: #FFF!important;
    color: #a7bd0d!important;
    border-color: #a7bd0d!important
}

.ui.green.label,.ui.green.labels .label {
    background-color: #21BA45!important;
    border-color: #21BA45!important;
    color: #FFF!important
}

.ui.green.labels .label:hover,a.ui.green.label:hover {
    background-color: #16ab39!important;
    border-color: #16ab39!important;
    color: #FFF!important
}

.ui.green.corner.label,.ui.green.corner.label:hover {
    background-color: transparent!important
}

.ui.green.ribbon.label {
    border-color: #198f35!important
}

.ui.basic.green.label {
    background-color: #FFF!important;
    color: #21BA45!important;
    border-color: #21BA45!important
}

.ui.basic.green.labels a.label:hover,a.ui.basic.green.label:hover {
    background-color: #FFF!important;
    color: #16ab39!important;
    border-color: #16ab39!important
}

.ui.teal.label,.ui.teal.labels .label {
    background-color: #00B5AD!important;
    border-color: #00B5AD!important;
    color: #FFF!important
}

.ui.teal.labels .label:hover,a.ui.teal.label:hover {
    background-color: #009c95!important;
    border-color: #009c95!important;
    color: #FFF!important
}

.ui.teal.corner.label,.ui.teal.corner.label:hover {
    background-color: transparent!important
}

.ui.teal.ribbon.label {
    border-color: #00827c!important
}

.ui.basic.teal.label {
    background-color: #FFF!important;
    color: #00B5AD!important;
    border-color: #00B5AD!important
}

.ui.basic.teal.labels a.label:hover,a.ui.basic.teal.label:hover {
    background-color: #FFF!important;
    color: #009c95!important;
    border-color: #009c95!important
}

.ui.blue.label,.ui.blue.labels .label {
    background-color: #2185D0!important;
    border-color: #2185D0!important;
    color: #FFF!important
}

.ui.blue.labels .label:hover,a.ui.blue.label:hover {
    background-color: #1678c2!important;
    border-color: #1678c2!important;
    color: #FFF!important
}

.ui.blue.corner.label,.ui.blue.corner.label:hover {
    background-color: transparent!important
}

.ui.blue.ribbon.label {
    border-color: #1a69a4!important
}

.ui.basic.blue.label {
    background-color: #FFF!important;
    color: #2185D0!important;
    border-color: #2185D0!important
}

.ui.basic.blue.labels a.label:hover,a.ui.basic.blue.label:hover {
    background-color: #FFF!important;
    color: #1678c2!important;
    border-color: #1678c2!important
}

.ui.violet.label,.ui.violet.labels .label {
    background-color: #6435C9!important;
    border-color: #6435C9!important;
    color: #FFF!important
}

.ui.violet.labels .label:hover,a.ui.violet.label:hover {
    background-color: #5829bb!important;
    border-color: #5829bb!important;
    color: #FFF!important
}

.ui.violet.corner.label,.ui.violet.corner.label:hover {
    background-color: transparent!important
}

.ui.violet.ribbon.label {
    border-color: #502aa1!important
}

.ui.basic.violet.label {
    background-color: #FFF!important;
    color: #6435C9!important;
    border-color: #6435C9!important
}

.ui.basic.violet.labels a.label:hover,a.ui.basic.violet.label:hover {
    background-color: #FFF!important;
    color: #5829bb!important;
    border-color: #5829bb!important
}

.ui.purple.label,.ui.purple.labels .label {
    background-color: #A333C8!important;
    border-color: #A333C8!important;
    color: #FFF!important
}

.ui.purple.labels .label:hover,a.ui.purple.label:hover {
    background-color: #9627ba!important;
    border-color: #9627ba!important;
    color: #FFF!important
}

.ui.purple.corner.label,.ui.purple.corner.label:hover {
    background-color: transparent!important
}

.ui.purple.ribbon.label {
    border-color: #82299f!important
}

.ui.basic.purple.label {
    background-color: #FFF!important;
    color: #A333C8!important;
    border-color: #A333C8!important
}

.ui.basic.purple.labels a.label:hover,a.ui.basic.purple.label:hover {
    background-color: #FFF!important;
    color: #9627ba!important;
    border-color: #9627ba!important
}

.ui.pink.label,.ui.pink.labels .label {
    background-color: #E03997!important;
    border-color: #E03997!important;
    color: #FFF!important
}

.ui.pink.labels .label:hover,a.ui.pink.label:hover {
    background-color: #e61a8d!important;
    border-color: #e61a8d!important;
    color: #FFF!important
}

.ui.pink.corner.label,.ui.pink.corner.label:hover {
    background-color: transparent!important
}

.ui.pink.ribbon.label {
    border-color: #c71f7e!important
}

.ui.basic.pink.label {
    background-color: #FFF!important;
    color: #E03997!important;
    border-color: #E03997!important
}

.ui.basic.pink.labels a.label:hover,a.ui.basic.pink.label:hover {
    background-color: #FFF!important;
    color: #e61a8d!important;
    border-color: #e61a8d!important
}

.ui.brown.label,.ui.brown.labels .label {
    background-color: #A5673F!important;
    border-color: #A5673F!important;
    color: #FFF!important
}

.ui.brown.labels .label:hover,a.ui.brown.label:hover {
    background-color: #975b33!important;
    border-color: #975b33!important;
    color: #FFF!important
}

.ui.brown.corner.label,.ui.brown.corner.label:hover {
    background-color: transparent!important
}

.ui.brown.ribbon.label {
    border-color: #805031!important
}

.ui.basic.brown.label {
    background-color: #FFF!important;
    color: #A5673F!important;
    border-color: #A5673F!important
}

.ui.basic.brown.labels a.label:hover,a.ui.basic.brown.label:hover {
    background-color: #FFF!important;
    color: #975b33!important;
    border-color: #975b33!important
}

.ui.grey.label,.ui.grey.labels .label {
    background-color: #767676!important;
    border-color: #767676!important;
    color: #FFF!important
}

.ui.grey.labels .label:hover,a.ui.grey.label:hover {
    background-color: #838383!important;
    border-color: #838383!important;
    color: #FFF!important
}

.ui.grey.corner.label,.ui.grey.corner.label:hover {
    background-color: transparent!important
}

.ui.grey.ribbon.label {
    border-color: #805031!important
}

.ui.basic.grey.label {
    background-color: #FFF!important;
    color: #767676!important;
    border-color: #767676!important
}

.ui.basic.grey.labels a.label:hover,a.ui.basic.grey.label:hover {
    background-color: #FFF!important;
    color: #838383!important;
    border-color: #838383!important
}

.ui.black.label,.ui.black.labels .label {
    background-color: #1B1C1D!important;
    border-color: #1B1C1D!important;
    color: #FFF!important
}

.ui.black.labels .label:hover,a.ui.black.label:hover {
    background-color: #27292a!important;
    border-color: #27292a!important;
    color: #FFF!important
}

.ui.black.corner.label,.ui.black.corner.label:hover {
    background-color: transparent!important
}

.ui.black.ribbon.label {
    border-color: #805031!important
}

.ui.basic.black.label {
    background-color: #FFF!important;
    color: #1B1C1D!important;
    border-color: #1B1C1D!important
}

.ui.basic.black.labels a.label:hover,a.ui.basic.black.label:hover {
    background-color: #FFF!important;
    color: #27292a!important;
    border-color: #27292a!important
}
</style>

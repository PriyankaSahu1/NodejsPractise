var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("jenkins");
  var myobj = [
      {name:"pipelineDemo1",class:"org.jenkinsci.plugins.workflow.job.WorkflowJob",url:"http://localhost:8080/job/pipelineDemo1/",color:"blue"},
      {name:"shared-library-test",class:"org.jenkinsci.plugins.workflow.job.WorkflowJob" ,url:"http://localhost:8080/job/shared-library-test/",color:"blue"},
      {name:"Student", class:"org.jenkinsci.plugins.workflow.job.WorkflowJob",url:"http://localhost:8080/job/Student/",color:"blue"},
      {name:"StudentPipeline", class:"org.jenkinsci.plugins.workflow.job.WorkflowJob",url:"http://localhost:8080/job/StudentPipeline/",color:"blue"},
      {name:"StudentPipeline",class:"org.jenkinsci.plugins.workflow.job.WorkflowJob",url:"http://localhost:8080/job/StudentPipeline/",color:"blue"},
      
  ];
  dbo.collection("data").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log(" documents inserted");
    db.close();
  });
});

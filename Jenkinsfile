pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t codurance/jenkins-pipeline-blog:latest .'
            }
        }

        stage('Test') {
            steps {
                sh 'docker run codurance/jenkins-pipeline-blog:latest yarn test'
            }
        }
         stage('Example Deploy') {
            when {
               branch 'master'
            }
            input {
                message "Deploy to production?"
                id "simple-input"
            }
            steps {
                echo 'Deploying'
            }
        }
        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                sh 'docker tag codurance/jenkins-pipeline-blog:latest localhost:5000/react-app-demo2'
                sh 'docker push localhost:5000/react-app-demo2'
            }
        }
    }

    post {
        failure {
            echo 'build is broken. notify team!'
        }
    }
}

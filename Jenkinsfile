pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t jenkins-pipeline-blog:latest'
            }
        }

        stage('Test') {
            steps {
                sh 'docker run jenkins-pipeline-blog:latest yarn test'
            }
        }

        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                sh 'echo commands to do deployment go here'
            }
        }
    }

    post {
        failure {
            echo 'build is broken. notify team!'
        }
    }
}

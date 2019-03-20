import React, { Component } from 'react';
import { Badge, Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Table, Pagination, PaginationItem, PaginationLink, } from 'reactstrap';

class Detail extends Component {
  render() {
    return (
      <Row>
          <Col>             
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>As a...</th>
                    <th>I want to be able to...</th>
                    <th>So that...</th>
                    <th>Priority</th>
                    <th>Estimation</th>
                    <th>Sprint </th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Admin</td>
                    <td>See a list of all members and visitors</td>
                    <td>I can monitor site visits</td>
                    <td>1</td>
                    <td>3</td>
                    <td>1</td>
                    <td>
                      <Badge color="success">Done</Badge>
                    </td>
                    <td>
                      <Button type="submit" size="sm" color="success"><i class="fa fa-share-square"></i></Button>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                      <Button type="reset" size="sm" color="danger"><i class="fa fa-trash"></i></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Admin</td>
                    <td>Add new categories</td>
                    <td>I can allow members to create engaging content</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                    <td>
                      <Badge color="success">Done</Badge>
                    </td>
                    <td>
                     <Button type="submit" size="sm" color="success"><i class="fa fa-share-square"></i></Button>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                      <Button type="reset" size="sm" color="danger"><i class="fa fa-trash"></i></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Admin</td>
                    <td>Add new security groups</td>
                    <td>Security levels are approriate</td>
                    <td>3</td>
                    <td>4</td>
                    <td>1</td>
                    <td>
                      <Badge color="success">Done</Badge>
                    </td>
                    <td>
                     <Button type="submit" size="sm" color="success"><i class="fa fa-share-square"></i></Button>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                      <Button type="reset" size="sm" color="danger"><i class="fa fa-trash"></i></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Admin</td>
                    <td>Add new key words</td>
                    <td>Content is easy to groups and search for</td>
                    <td>4</td>
                    <td>6</td>
                    <td>1</td>
                    <td>
                      <Badge color="success">Done</Badge>
                    </td>
                    <td>
                     <Button type="submit" size="sm" color="success"><i class="fa fa-share-square"></i></Button>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                      <Button type="reset" size="sm" color="danger"><i class="fa fa-trash"></i></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Admin</td>
                    <td>Delete comment</td>
                    <td>Offensive content is removed</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>
                      <Badge color="success">Done</Badge>
                    </td>
                    <td>
                     <Button type="submit" size="sm" color="success"><i class="fa fa-share-square"></i></Button>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                      <Button type="reset" size="sm" color="danger"><i class="fa fa-trash"></i></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Member</td>
                    <td>Update my account detail</td>
                    <td>I can be contacted by admin</td>
                    <td>5</td>
                    <td>3</td>
                    <td>2</td>
                    <td>
                      <Badge color="warning">Work in progress</Badge>
                    </td>
                    <td>
                     <Button type="submit" size="sm" color="success"><i class="fa fa-share-square"></i></Button>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                      <Button type="reset" size="sm" color="danger"><i class="fa fa-trash"></i></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Member</td>
                    <td>Change my password </td>
                    <td>I can keep secure</td>
                    <td>5</td>
                    <td>1</td>
                    <td>2</td>
                    <td>
                      <Badge color="warning">Work in progress</Badge>
                    </td>
                    <td>
                     <Button type="submit" size="sm" color="success"><i class="fa fa-share-square"></i></Button>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                      <Button type="reset" size="sm" color="danger"><i class="fa fa-trash"></i></Button>
                    </td>
                  </tr>
                   <tr>
                    <td>8</td>
                    <td>Member</td>
                    <td>Update my email preferences </td>
                    <td>I am not bombarded junk mail</td>
                    <td>6</td>
                    <td>2</td>
                    <td>2</td>
                    <td>
                      <Badge color="warning">Work in progress</Badge>
                    </td>
                    <td>
                     <Button type="submit" size="sm" color="success"><i class="fa fa-share-square"></i></Button>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                      <Button type="reset" size="sm" color="danger"><i class="fa fa-trash"></i></Button>
                    </td>
                  </tr>
                   <tr>
                    <td>9</td>
                    <td>Visitor</td>
                    <td>Create an account </td>
                    <td>I can benifit from member discounts</td>
                    <td>7</td>
                    <td>1</td>
                    <td></td>
                    <td>
                      <Badge color="primary">To be started</Badge>
                    </td>
                    <td>
                     <Button type="submit" size="sm" color="success"><i class="fa fa-share-square"></i></Button>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                      <Button type="reset" size="sm" color="danger"><i class="fa fa-trash"></i></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Visitor</td>
                    <td>Suggest improvements</td>
                    <td>I can contribute to the site usability </td>
                    <td>8</td>
                    <td>2</td>
                    <td></td>
                    <td>
                      <Badge color="primary">To be started</Badge>
                    </td>
                    <td>
                     <Button type="submit" size="sm" color="success"><i class="fa fa-share-square"></i></Button>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                      <Button type="reset" size="sm" color="danger"><i class="fa fa-trash"></i></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Visitor</td>
                    <td>View member profile </td>
                    <td>I can know more about member </td>
                    <td>9</td>
                    <td>3</td>
                    <td></td>
                    <td>
                      <Badge color="primary">To be started</Badge>
                    </td>
                    <td>
                     <Button type="submit" size="sm" color="success"><i class="fa fa-share-square"></i></Button>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                      <Button type="reset" size="sm" color="danger"><i class="fa fa-trash"></i></Button>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>           
          </Col>
        </Row>
    );
  }
}

export default Detail;
